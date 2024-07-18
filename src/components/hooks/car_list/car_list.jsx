import { useQuery } from '@tanstack/react-query';
import Fetching from '../../../http/api_request';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCarsLoading } from '../../../redux/mainSlice';

export const useCarsList =()=>{
    const carInfo=useSelector(state=>state.user.transports);

    const {data,isLoading,isFetching,isError,error,refetch}=useQuery({
        queryKey:['carList',carInfo.carsLimit,carInfo.pagination.page],
        queryFn: ()=>Fetching.carList(carInfo.carsLimit,carInfo.pagination.page),
        select:(resp) => resp.data
    })
    useEffect(()=>{
        isError&& console.log("mistake in carList request"+error) 
    },[isError,error])
    return {data,isLoading,isError,error,refetch}
}