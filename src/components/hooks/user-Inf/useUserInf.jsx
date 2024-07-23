import { useQuery } from '@tanstack/react-query';
import Fetching from '../../../http/api_request';
import { useEffect,useState } from 'react';
import { useSelector } from 'react-redux';

export const useUserInf =()=>{
    const state = useSelector(state=> state.user)
  
    return useQuery({
        queryKey:['userInf'],
        queryFn: Fetching.userInf() ,
        select:(resp) => resp.data
    });


   
}