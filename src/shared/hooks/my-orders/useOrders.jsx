import { useMutation, useQuery,useQueryClient } from "@tanstack/react-query"
import Fetching from "../../../http/api_request"

export const useOrders=(status)=>{
    const queryClient=useQueryClient(); 

    const {mutate,data,isPending,}=useMutation({
        mutationKey:['search orders',status],
        mutationFn: ({lotsLimit,listPage,search})=>Fetching.bidSearch(lotsLimit,listPage,search),
    })
    return {mutate, data, isPending}
}