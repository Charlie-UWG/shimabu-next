import useSWR from "swr";
import { fetcher } from "src/util/fetcher";

const useFetchArray = (url) => {
  const { data, error } = useSWR(url, fetcher);
  return {
    data,
    error,
    isLoading: !error && !data,
    isEmpty: data && data.length === 0,
  };
};

const API_URL = "https://jsonplaceholder.typicode.com";

export const useComments = () => {
  return useFetchArray(`${API_URL}/comments`, fetcher);
};

export const usePosts = () => {
  return useFetchArray(`${API_URL}/posts`, fetcher);
};

export const useUsers = () => {
  return useFetchArray(`${API_URL}/users`, fetcher);
};
