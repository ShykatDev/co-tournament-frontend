import type { FetchOptions } from "ofetch";

export const useAPI = <T>(
  key: string,
  url: string,
  options?: FetchOptions,
  immediate = true
) => {
  const config = useRuntimeConfig();
  const base = config.public.backendUrl;

  return useAsyncData<T>(key, () => $fetch<T>(`${base}${url}`, options), {
    immediate,
  });
};
