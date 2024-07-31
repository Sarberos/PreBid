import { useMutation, useQueryClient } from "@tanstack/react-query";
import Fetching from "../../../http/api_request";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export const useSearchByVin = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["search_by_vin"],
    mutationFn: (vin) => Fetching.searchByVin(vin),
    // onSuccess: () => queryClient.invalidateQueries({ queryKey: ["my lots"] }),
  });
};
