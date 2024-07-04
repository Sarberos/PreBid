import { useQuery } from "@tanstack/react-query"
import Fetching from "../../../http/api_request"
import { useEffect } from "react";


export const useMyLots = (lotsLimit=1,pageLimit=10,lotStatus=0)=>{
    const {data,isLoading,isSuccess,isError}=useQuery({
        queryKey:['my lots',lotsLimit,pageLimit,lotStatus],
        queryFn:()=>Fetching.getMySales(lotsLimit,pageLimit,lotStatus),
        select: resp=> resp.data
    })
    useEffect(() => {
        
    }, [isSuccess, data]);
    return {data,isLoading,isSuccess,isError}
}