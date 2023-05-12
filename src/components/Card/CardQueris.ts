import {usePrefetch} from "../../API/reactQueryHooks";
import {useRef} from "react";
import {toDoType} from "../../types/api-types";
import {apiRoutes} from "../../Routes";

export const usePrefetchToDo = ()=>{
    const prefetchedRef = useRef<boolean>();

    const prefetch = usePrefetch<toDoType>(apiRoutes.getToDo)

    const prefetchToDo = async ()=>{
        if (!prefetchedRef.current) {
           prefetchedRef.current = true;
            return await prefetch()
        }
    }
   return prefetchToDo
}