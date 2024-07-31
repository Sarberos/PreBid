import { useMutation, useQuery,useQueryClient } from "@tanstack/react-query"
import Fetching from "../../../http/api_request"
import {useEffect} from 'react'

export const useCreateLot=()=>{
    const queryClient=useQueryClient(); 

   return useMutation({
        mutationKey:['create lot'],
        mutationFn: (createLotConfig)=>Fetching.transport(createLotConfig),
        onSuccess: ()=>queryClient.invalidateQueries({queryKey:['my lots']}),
    })
  
}