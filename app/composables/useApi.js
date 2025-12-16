export const useApi = () => {
  const config = useRuntimeConfig();
  const base = config.public.backendUrl;

  const getPointTable = (tournamentId) =>
    $fetch(`${base}/points/${tournamentId}`);
  const getLiveMatch = () => $fetch(`${base}/matches/live`);
  const getUpcomingMatches = () => $fetch(`${base}/matches/upcoming`);
  const getTournaments = () => $fetch(`${base}/tournaments`);

  return { getLiveMatch, getUpcomingMatches, getPointTable, getTournaments };
};
