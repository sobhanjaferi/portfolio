import { useQuery } from "@tanstack/react-query";

function useFetch<T>(url: string) {
  return useQuery<T>({
    queryKey: ["fetch data", url],
    queryFn: async () => {
      const data = await fetch(url);
      const result = await data.json();

      return result as Promise<T>;
    },
  });
}

export default useFetch;
