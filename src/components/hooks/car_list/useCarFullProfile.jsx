import { useQuery } from '@tanstack/react-query';
import Fetching from '../../../http/api_request';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

export const useCarFullProfile =(carId)=>{
    
    return useQuery({
        queryKey:['carProfile',carId ],
        queryFn: ()=>Fetching.carFullProfile(carId),
        select:(resp) => resp.data
    })
    

    
}