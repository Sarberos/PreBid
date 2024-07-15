import { useQuery } from '@tanstack/react-query';
import Fetching from '../../../http/api_request';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

export const useCarsList =()=>{
    const carInfo=useSelector(state=>state.user.transports)

    const {data,isLoading,isError,error}=useQuery({
        queryKey:['carList'],
        queryFn: ()=>Fetching.carList(carInfo.carsLimit,carInfo.pagination.page),
        select:(resp) => resp.data
    })
    useEffect(()=>{
        isError&& console.log("mistake in carList request"+error) 
    },[isError,error])

    return {data,isLoading}
}