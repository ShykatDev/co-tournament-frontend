export const useBackendUrl = () => {
  const config = useRuntimeConfig();
  return config.public.backendUrl;
};
