import {
    QueryFunctionContext,
    useInfiniteQuery,
    useMutation,
    useQuery,
    useQueryClient,
    UseQueryOptions
} from "@tanstack/react-query";
import {api} from "../Api";
import {GetInfinitePagesType, QueryKeyT} from "../../types";
import {AxiosError, AxiosResponse} from "axios";


export const fetcher = <T>({queryKey, pageParam}: QueryFunctionContext<QueryKeyT>): Promise<T> => {
    const [url, params] = queryKey;
    return api
        .get<T>(url, {params: {...params, pageParam}})
        .then((res) => res.data);
};

export const useFetch = <T>(
    url: string | null,
    params?: object,
    config?: UseQueryOptions<T, Error, T, QueryKeyT>,
) => {
    const context = useQuery<T, Error, T, QueryKeyT>(
        [url!, params],
        ({queryKey}) => fetcher({queryKey} as QueryFunctionContext<QueryKeyT>),
        {
            enabled: !!url,
            ...config,
        }
    );

    return context;
};

export const useLoadMore = <T>(url: string | null, params?: object) => {
    const context = useInfiniteQuery<GetInfinitePagesType<T>,
        Error,
        GetInfinitePagesType<T>,
        QueryKeyT>(
        [url!, params],
        ({queryKey, pageParam = 1}) => fetcher({queryKey, pageParam} as QueryFunctionContext<QueryKeyT>),
        {
            getPreviousPageParam: (firstPage) => firstPage.previousId ?? false,
            getNextPageParam: (lastPage) => {
                return lastPage.nextId ?? false;
            },
        }
    );
    return context;
};

export const usePrefetch = <T>(url: string | null, params?: object) => {
    const queryClient = useQueryClient();

    return () => {
        if (!url) {
            return;
        }

        queryClient.prefetchQuery<T, Error, T, QueryKeyT>(
            [url!, params],
            ({queryKey}) => fetcher({queryKey} as QueryFunctionContext<QueryKeyT>)
        );
    };
};

export const useGenericMutation = <T, S>(
    func: (data: T | S) => Promise<AxiosResponse<S>>,
    url: string,
    params?: object,
    updater?: ((oldData: T, newData: S) => T)
) => {
    const queryClient = useQueryClient();

    return useMutation<AxiosResponse, AxiosError, T | S>(func, {
        onMutate: async (data) => {
            await queryClient.cancelQueries([url!, params]);
            const previousData = queryClient.getQueryData([url!, params]);
            queryClient.setQueryData<T>([url!, params], (oldData) => {
                return updater ? updater(oldData!, data as S) : (data as T);
            });

            return previousData;
        },
        onError: (err, _, context) => {
            queryClient.setQueryData([url!, params], context);
        },
        onSettled: () => {
            queryClient.invalidateQueries([url!, params]);
        },
    });
};

export const useDelete = <T>(
    url: string,
    params?: object,
    updater?: (oldData: T, deletedId: string) => T
) => {
    return useGenericMutation<T, string>(
        (id) => api.delete(`${url}/${id}`),
        url,
        params,
        updater
    );
};

export const usePost = <T, D>(
    url: string,
    params?: object,
    updater?: (oldData: T, newData: D) => T
) => {
    return useGenericMutation<T, D>(
        (data) => api.post<D>(url, data as D),
        url,
        params,
        updater
    );
}

export const useUpdate = <T, D>(
    url: string,
    params?: object,
    updater?: (oldData: T, newData: D) => T
) => {
    return useGenericMutation<T, D>(
        (data) => api.patch<D>(url, data as D),
        url,
        params,
        updater
    );
};