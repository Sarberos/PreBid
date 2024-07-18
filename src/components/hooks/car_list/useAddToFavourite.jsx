import { useQuery } from '@tanstack/react-query';
import Fetching from '../../../http/api_request';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

export const useAddToFavourite =(carId,addStatus)=>{
    const {data,isLoading,isError,error}=useQuery({
    queryKey:['addToFavourite',carId, addStatus],
        queryFn: ()=>Fetching.favourite(carId, addStatus),
        select:(resp) => resp.data
    })
    useEffect(()=>{
        isError&& console.log("mistake in add to favourite  request"+error) 
    },[isError,error])

    return {data,isLoading}
}