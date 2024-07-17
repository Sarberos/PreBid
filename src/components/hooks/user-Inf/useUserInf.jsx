import { useQuery } from '@tanstack/react-query';
import Fetching from '../../../http/api_request';
import { useEffect } from 'react';

export const useUserInf =()=>{
    const {data,isLoading,isError,error}=useQuery({
        queryKey:['userInf'],
        queryFn: ()=>Fetching.userInf(),
        select:(resp) => resp.data
    })
    useEffect(()=>{
        isError&& console.log("mistake in userInf request"+error) 
    },[isError,error])

    return {data,isLoading,error}
}