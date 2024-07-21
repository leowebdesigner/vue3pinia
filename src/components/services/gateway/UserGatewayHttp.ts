import HttpAdapter from "../http/HttpClientAdapter";

export default class UserGatewayHttp {
       async login(email: string, password: string): Promise<any> {
        const device_name = `${navigator.userAgent}`
         await HttpAdapter.post('/auth', {
            email, 
            password,
            device_name
         });
       }
    }
