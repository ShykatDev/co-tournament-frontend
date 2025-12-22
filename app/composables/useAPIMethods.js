export const useAPIMethods = () => {
  const config = useRuntimeConfig();
  const base = config.public.backendUrl;

  const getMe = () => $fetch(`${base}/me`, { credentials: "include" });

  const getPointTable = (tournamentId) =>
    $fetch(`${base}/points/${tournamentId}`);

  const getLiveMatch = () => $fetch(`${base}/matches/live`);

  const getUpcomingMatches = () => $fetch(`${base}/matches/upcoming`);

  const getTournaments = () => $fetch(`${base}/tournaments`);

  const getAllMatches = () => $fetch(`${base}/matches`);

  const getAllClubs = () => $fetch(`${base}/club`);
  const getAllTeams = () => $fetch(`${base}/teams`);

  const login = (payload) =>
    $fetch(`${base}/login`, {
      method: "POST",
      body: payload,
      credentials: "include",
    });

  const logout = () =>
    $fetch(`${base}/logout`, {
      method: "POST",
      credentials: "include",
    });


  const createMatch = (payload) =>
    $fetch(`${base}/matches`, {
      method: "POST",
      body: payload,
      credentials: "include",
    });

  const startMatch = (matchId) =>
    $fetch(`${base}/matches/${matchId}/start`, {
      method: "PATCH",
      credentials: "include",
    });

  const deleteMatch = (matchId) =>
    $fetch(`${base}/matches/${matchId}`, {
      method: "DELETE",
      credentials: "include",
    });

  const editMatchResult = (matchId, payload) =>
    $fetch(`${base}/matches/${matchId}/finish`, {
      method: "POST",
      body: payload,
      credentials: "include",
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
    login,
    logout,
    deleteMatch,
    getMe,
  };
};
