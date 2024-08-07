import { useMutation, useQueryClient } from "@tanstack/react-query";
import Fetching from "../../../http/api_request";
import { useEffect, useState } from "react";
import {toast} from "react-hot-toast"



export const useSearchAEKImg = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["search_AEK_img"],
    mutationFn: (vin) =>{ 
      return toast.promise(
        Fetching.searchImg_ByVin(vin),
         {
           loading: 'Загружаем изображения из AEK',
           success: <b>Изображения успешно получены</b>,
           error: <b>Ошибка получения изображений</b>,
         }
       );}
  });

};
