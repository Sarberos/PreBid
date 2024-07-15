import { useQuery } from '@tanstack/react-query';
import Fetching from '../../../http/api_request';
import { useEffect } from 'react';

export const useFilterInf =()=>{
    const {data,isLoading,isError,error}=useQuery({
        queryKey:['filter_inf'],
        queryFn: Fetching.filterInf,
        select:(resp) => resp.data
    })
    useEffect(()=>{
        isError&& console.log("mistake in filterInf request"+error) 
    },[isError,error])

    return {data,isLoading}
}