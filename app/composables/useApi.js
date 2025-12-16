export const useApi = () => {
  const config = useRuntimeConfig();
  const base = config.public.backendUrl;

  const getPointTable = (tournamentId) =>
    $fetch(`${base}/points/${tournamentId}`);
  
  const getLiveMatch = () => $fetch(`${base}/matches/live`);
  
  const getUpcomingMatches = () => $fetch(`${base}/matches/upcoming`);

  const getTournaments = () => $fetch(`${base}/tournaments`);
  
  const getAllMatches = () => $fetch(`${base}/matches`);

  const getAllClubs = () => $fetch(`${base}/club`);
  const getAllTeams = () => $fetch(`${base}/teams`);

  const createMatch = (payload) =>
    $fetch(`${base}/matches`, {
      method: "POST",
      body: payload
    });

  const startMatch = (matchId) => $fetch(`${base}/matches/${matchId}/start`, {
     method: 'PATCH',
  });

  const editMatchResult = (matchId, payload) =>
    $fetch(`${base}/matches/${matchId}/finish`, {
      method: "POST",
      body: payload
    });

  return {
    getLiveMatch,
    getUpcomingMatches,
    getPointTable,
    getTournaments,
    getAllMatches,
    startMatch,
    editMatchResult,
    getAllClubs,
    createMatch,
    getAllTeams,
  };
};
