import { NAME_TOKEN } from "../../../utils/constants";
import HttpAdapter from "../http/HttpClientAdapter";

export default class UserGatewayHttp {
       async login(email: string, password: string): Promise<any> {
        const device_name = `${navigator.userAgent}`
        return await HttpAdapter.post('/auth', {
            email, 
            password,
            device_name
         })
         .then(response => localStorage.setItem(NAME_TOKEN, response.data.token));
       }
    }
