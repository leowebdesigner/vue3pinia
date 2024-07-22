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
        hasUsers: (state): boolean => state.users.length > 0 
    },
    actions: {
        async auth(email: string, password: string): Promise<Response> {
            return await UserGateway.login(email, password)
        },
        async getMe(): Promise<void> {
            await UserGateway.getMe().then(user => this.me = user)
        }
    }
})