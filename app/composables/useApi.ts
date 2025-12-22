import type { NitroFetchOptions } from 'nitropack'

export const useAPI = <T>(
  key: string,
  url: string,
  options?: NitroFetchOptions<string>,
  immediate = true
) => {
  const config = useRuntimeConfig();
  const base = config.public.backendUrl;

  return useAsyncData<T>(key, () => $fetch<T>(`${base}${url}`, options), {
    immediate,
  });
};
