import User from "../../../entities/user";
import HttpAdapter from "../http/HttpClientAdapter";

export default class UserGatewayHttp {
       async login(email: string, password: string): Promise<User> {
        const device_name = `${navigator.userAgent}`
        return await HttpAdapter.post('/auth', {
            email, 
            password,
            device_name
         });
       }
    }
