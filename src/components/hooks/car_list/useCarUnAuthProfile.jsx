import { useQuery } from '@tanstack/react-query';
import Fetching from '../../../http/api_request';

export const useCarUnAuthProfile =(carId)=>{
    
    return useQuery({
        queryKey:['carUnAuthProfile',carId ],
        queryFn: ()=>Fetching.carUnAuthProfile(carId),
        select:(resp) => resp.data
    })
    

    
}