import { defineStore } from "pinia"
import UserGatewayHttp from "../components/services/gateway/UserGatewayHttp"

const UserGateway = new UserGatewayHttp

export const useUsersStore = defineStore('users', {
    state: () => ({
        users: [] 
    }),
    getters: {
        hasUsers: (state) => state.users.length > 0 
    },
    actions: {
        auth(email: string, password: string): Promise<any> {
            return UserGateway.login(email, password)
        }
    }
})