import { useQuery } from "@tanstack/react-query"
import Fetching from "../../../http/api_request";
import { useEffect } from "react";

export function useCountries() {
  const { data, isLoading, isSuccess, isError, error } = useQuery({
    queryKey: ["auction countries"],
    queryFn: Fetching.getCountries,
    select: (resp) => resp.data,
  });
  useEffect(() => {
    data && console.log(data);
  }, [isSuccess, data]);
  useEffect(() => {
    isError && console.log("mistake in counties request");
  }, [isError, error]);
  return {data, isLoading, isSuccess, isError, error}
}



