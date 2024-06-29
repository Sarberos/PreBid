import { useQuery } from "@tanstack/react-query"
import Fetching from "../../../http/api_request"
import {useEffect} from 'react'

export const useListCount=()=>{

    const {data,isLoading,isSuccess,isError}=useQuery({
        queryKey:['sales count'],
        queryFn: ()=>Fetching.getSalesCount(),
        select: resp=> resp.data,
    })
    useEffect(() => {
        
      }, [isSuccess, data]);


    return {data,isLoading,isSuccess,isError}
}