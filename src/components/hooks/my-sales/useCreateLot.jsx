import { useMutation, useQuery,useQueryClient } from "@tanstack/react-query"
import Fetching from "../../../http/api_request"
import {useEffect} from 'react'
import {toast} from 'react-hot-toast'

export const useCreateLot=(imgUrlArr)=>{
    const queryClient=useQueryClient(); 

    const handleUploadImg = async (imgUrlArr, transportId) => {  
        const formData = new FormData();  
        for (let imgUrl of imgUrlArr) {  
            if (imgUrl) {  
                try {
                    const response = await fetch(imgUrl);  
                    const blob = await response.blob();  
                    formData.append('images[]', blob);
                } catch (error) {
                    toast.error(error)
                }
                

            }  
        }  
        formData.append('prebid_transport_id', transportId);  
    
        Fetching.setTransportImgs(formData);  
    };   

   return useMutation({
        mutationKey:['create lot'],
        mutationFn: (createLotConfig)=>Fetching.transport(createLotConfig),
        onSuccess: (resp)=>{handleUploadImg(imgUrlArr,resp.data["0"].id)},
        onError: (e)=>{toast.error(e.reason)}
    })
  
}