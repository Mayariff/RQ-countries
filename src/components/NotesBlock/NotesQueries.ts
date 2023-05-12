import {countryNotesType} from "../../types/api-types";
import {useDelete, useFetch, usePost} from "../../API/reactQueryHooks";
import {pathToUrl} from "../../utils/routing";
import {apiRoutes} from "../../Routes";

export const useDeleteNote = (
    updater: (
        oldData: countryNotesType[],
        deletedId: string
    ) => countryNotesType[]
) => useDelete<countryNotesType[]>(pathToUrl(apiRoutes.country_notes), undefined, updater);

export const usePostNote =(
    updater:( oldData: countryNotesType[],
              newData: countryNotesType)=> countryNotesType[]
)=>usePost<countryNotesType[], countryNotesType>(pathToUrl(apiRoutes.country_notes),undefined, updater )

export const useGetNotes =()=>useFetch<countryNotesType[]>(pathToUrl(apiRoutes.country_notes), undefined, {select: (data)=>  data.reverse()} )
