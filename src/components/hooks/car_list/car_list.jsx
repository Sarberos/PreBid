import { useQuery } from '@tanstack/react-query';
import Fetching from '../../../http/api_request';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCarsLoading } from '../../../redux/mainSlice';

export const useCarsList =()=>{
    const state= useSelector(state=>state.user)

    const {data,isLoading,isFetching,isError,error,refetch}=useQuery({
        queryKey:['carList',state.transports.carsLimit,state.transports.pagination.page],
        queryFn:()=> state.isAuth ?Fetching.carList(state.transports.carsLimit,state.transports.pagination.page):Fetching.allCarList(state.transports.carsLimit,state.transports.pagination.page),
        select:(resp) => resp.data
    })
    useEffect(()=>{
        isError&& console.log("mistake in carList request"+error) 
    },[isError,error])
    return {data,isLoading,isError,error,refetch}
}