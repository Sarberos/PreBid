import { useQuery } from '@tanstack/react-query';
import Fetching from '../../../http/api_request';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

export const useFavouriteCars =()=>{
    const favourCarsInfo = useSelector(state=> state.user.favourCars)

    const {data,isLoading,isRefetching,isError,error,refetch}=useQuery({
        queryKey:['favouriteCarsList',favourCarsInfo.carsLimit,favourCarsInfo.currentPage,favourCarsInfo.carsAmount],
        queryFn: ()=>Fetching.favoriteCarList(favourCarsInfo.carsLimit,favourCarsInfo.currentPage),
        select:(resp) => resp.data
    })
    useEffect(()=>{
        isError&& console.log("mistake in favourite cars request"+error) 
    },[isError,error])


    return {data,isLoading,isError,error,refetch}
}