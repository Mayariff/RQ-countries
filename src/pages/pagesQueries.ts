import {useFetch, useLoadMore} from "../API/reactQueryHooks";
import {countryType} from "../types/api-types";
import {apiRoutes} from "../Routes";
import {pathToUrl} from "../utils/routing";
import {useParams} from "react-router-dom";

export const useLoadMoreCountries = () => useLoadMore<countryType[]>(pathToUrl(apiRoutes.getCountryList))

export const useGetCountry = () => {
    const {id} = useParams()
    return useFetch<countryType>(pathToUrl(apiRoutes.getCountry, {id: `${id}`}), undefined,
        {enabled: !!id})
}
