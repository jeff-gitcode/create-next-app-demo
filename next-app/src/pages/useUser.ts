import useSWR from "swr"
import { fetcher } from "./fetcher"

export function useUser(id) {
    const { data, error, isLoading } = useSWR(`/api/user/${id}`, fetcher)
   
    return {
      data,
      isLoading,
      error,
    }
  }