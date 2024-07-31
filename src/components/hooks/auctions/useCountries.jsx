import { useQuery } from "@tanstack/react-query"
import Fetching from "../../../http/api_request";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export function useCountries() {
  const state = useSelector(state => state.user)

  const { data, isLoading, isSuccess, isError, error } = useQuery({
    queryKey: ["auction countries"],
    queryFn: state.userRole!=="unAuth" ? Fetching.getCountries : '',
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



