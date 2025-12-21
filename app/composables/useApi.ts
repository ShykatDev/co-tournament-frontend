
export const useAPI = (
  key: string,
  url: string,
  options?: Parameters<typeof $fetch>[1],
  immediate = true // auto-fetch by default
) => {
  const config = useRuntimeConfig();
  const base = config.public.backendUrl;

  // useAsyncData returns reactive refs: data, pending, error, refresh
  return useAsyncData(
    key,
    () => $fetch(`${base}${url}`, options),
    { immediate }
  );
};
