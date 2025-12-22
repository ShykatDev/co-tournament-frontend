import { ref } from "vue";


const user = ref<null | { id: string; name: string; email: string }>(null);
const loggedIn = ref(false);

export const useAuth = () => {
  const api = useAPIMethods()
  const fetchUser = async () => {
    try {
      const res: any = await api.getMe();
      user.value = res.user;
      loggedIn.value = true;
    } catch {
      user.value = null;
      loggedIn.value = false;
    }
  };

  const logout = async () => {
    try {
      await api.logout()
      user.value = null;
      loggedIn.value = false;
    } catch (err) {
      console.error("Logout failed", err);
    }
  };

  return {
    user,
    loggedIn,
    fetchUser,
    logout,
  };
};
