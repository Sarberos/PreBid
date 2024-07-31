import { useMutation, useQueryClient } from "@tanstack/react-query";
import Fetching from "../../../http/api_request";
import { useEffect, useState } from "react";
import { useToast } from "../../../utilits/Toaster/Toaster";

export const useSearchAEKImg = () => {
  const queryClient = useQueryClient();
  const [toastSettings,setToastStatus]= useState({isToastOpen: false, toastStatus:false,toastTxt:"", tostGravity:'top', })
  useToast(toastSettings.isToastOpen, toastSettings.toastStatus,toastSettings.toastTxt,  toastSettings.tostGravity , );

  return useMutation({
    mutationKey: ["search_AEK_img"],
    mutationFn: (vin) => Fetching.searchImg_ByVin(vin),
    onError: (e)=>{
      setToastStatus(prevState=>({...prevState,isToastOpen:true,toastTxt:e.reason,tostGravity:'bottom'}))
      setTimeout(()=>{ setToastStatus((prevState)=>({...prevState,isToastOpen:false}))},750)
    },
    onSuccess:()=>{
  
    }
  });
};
