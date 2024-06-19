import { useQuery } from "@tanstack/react-query"
import Fetching from "../../../http/api_request"
import {useEffect} from 'react'

export const useListOptions=()=>{

    const {data,isLoading,isSuccess,isError}=useQuery({
        queryKey:['sales options list'],
        queryFn: ()=>Fetching.getListOptions(),
        select: resp=> resp.data.content,
    })
    useEffect(() => {
        
      }, [isSuccess, data]);


    return {data,isLoading,isSuccess,isError}
}