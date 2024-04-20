import useSWR from "swr"
import { fetcher } from "./fetcher"

export function useUser(id: string) {
  const { data, error, isLoading } = useSWR(`/api/user/${id}`, fetcher)

  return {
    data,
    isLoading,
    error,
  }
}

export function useUsers() {
  const { data, error, isLoading } = useSWR(`/api/user`, fetcher)

  return {
    data,
    isLoading,
    error,
  }
}