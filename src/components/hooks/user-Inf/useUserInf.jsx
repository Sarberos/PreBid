import { useQuery } from '@tanstack/react-query';
import Fetching from '../../../http/api_request';
import { useEffect,useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setIsAuth, setIsLoading } from '../../../redux/mainSlice';

export const useUserInf =()=>{
    const state = useSelector(state=> state.user)
    const dispatch= useDispatch()

    const {data, isLoading, isFetching,error,isError,refetch}=useQuery({
        queryKey:['userInf'],
        queryFn: ()=> !!localStorage.getItem('access_token')?Fetching.userInf():'' ,
        select:(resp) => resp.data
    });

    useEffect(()=>{      
    if(data){
        dispatch(setIsLoading(false))
      }  
    },[data])
    useEffect(()=>{
        if (!!localStorage.getItem('access_token')) {
          dispatch(setIsAuth(true))
        }else if (!localStorage.getItem('access_token')) {
          dispatch(setIsAuth(false))
        }
      },[!!localStorage.getItem('access_token')])
   
    
    return {data, isLoading, isFetching,error,isError,refetch}
   
}