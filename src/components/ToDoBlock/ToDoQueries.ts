import {useFetch, useUpdate} from "../../API/reactQueryHooks";
import {countryType, toDoType} from "../../types/api-types";
import {pathToUrl} from "../../utils/routing";
import {apiRoutes} from "../../Routes";
import {useParams} from "react-router-dom";


export const useGetToDo = () => useFetch<toDoType[]>(pathToUrl(apiRoutes.getToDo))

export const useUpdateDoneItems = (
    updater: (oldData: countryType,
              newData: { done_items: string[] }) => countryType
) => {
    const {id} = useParams()
    return useUpdate<countryType, { done_items: string[] }>(pathToUrl(apiRoutes.getCountry, {id: `${id!}`}), undefined, updater)
}