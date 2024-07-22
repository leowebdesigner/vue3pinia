import { defineStore } from "pinia"
import UserGatewayHttp from "../components/services/gateway/UserGatewayHttp"
import User from "../entities/user"

const UserGateway = new UserGatewayHttp

export const useUsersStore = defineStore('users', {
    state: () => ({
        me: null as null | User,
        users: [] as User[]
    }),
    getters: {
        hasUsers: (state) => state.users.length > 0 
    },
    actions: {
        async auth(email: string, password: string): Promise<any> {
            return await UserGateway.login(email, password)
        }
    }
})