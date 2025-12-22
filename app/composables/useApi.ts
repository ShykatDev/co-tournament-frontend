import type { NitroFetchOptions } from "nitropack";
import { unref } from "vue";

export const useAPI = <T>(
  key: string | Ref<string>,
  url: string,
  options?: NitroFetchOptions<string> | Ref<NitroFetchOptions<string>>,
  immediate = true
) => {
  const config = useRuntimeConfig();
  const base = config.public.backendUrl;

  // Unwrap refs when calling useAsyncData
  return useAsyncData<T>(
    () => unref(key),
    () => $fetch<T>(`${base}${url}`, unref(options)),
    { immediate }
  );
};
