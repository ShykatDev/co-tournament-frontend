import { defineStore } from "pinia";

export const useAuthStore = defineStore('auth-store', ()=> {
    const user = ref({
        id: '',
        name: '',
        email: ''
    })
    const isLogin = ref(false)
    const toast = useToast()

    async function fetchMe(){
        const api = useAPIMethods();
        try{
            const res = await api.getMe()
            
            isLogin.value = true
            user.value = res.user

        }catch(err){
            console.error(err);   
        }
    }

    async function logout() {
        const api = useAPIMethods()
        try{
            await api.logout()
            isLogin.value = false

            toast.add({
                title: "Logout Successful",
                color: 'success'
            })
        }catch(err){
            console.error(err);   
        }
    }

    return {user, isLogin, fetchMe, logout}
})