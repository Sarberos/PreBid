import { useQuery } from "@tanstack/react-query"
import Fetching from "../../../http/api_request";
import { useEffect } from "react";

export function useSearch(
  auctionsLimit=10,
  listPage=1, country_id = null, date_start_select=null,date_final_select=null,
) {
    const getAuctions = () =>
      Fetching.getAuctionList(auctionsLimit, listPage, {
        date_start_select,
        date_final_select,
        country_id:country_id,
      });
    const { data, isLoading, isSuccess, isError, error,refetch } = useQuery({
      queryKey: ["auctions", listPage, auctionsLimit, country_id, date_start_select, date_final_select],
      queryFn: getAuctions,
      select: resp=>resp.data,
    });
    
    useEffect(() => {
      isError && console.log("mistake in serch request"+error);
    }, [isError, error]);
    return { data, isLoading, isSuccess, isError, error,refetch };
}


