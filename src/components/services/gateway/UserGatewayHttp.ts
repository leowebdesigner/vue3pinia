import User from "../../../entities/user";
import { NAME_TOKEN } from "../../../utils/constants";
import HttpAdapter from "../http/HttpClientAdapter";

export default class UserGatewayHttp {
       async login(email: string, password: string): Promise<Response> {
        const device_name = `${navigator.userAgent}`;
        return await HttpAdapter.post('/auth', {
            email, 
            password,
            device_name
         })
         .then((response) => {
          localStorage.setItem(NAME_TOKEN, response.data.token)
          return Promise.resolve(response)
         }); 
       }

       async getMe(): Promise<User> {
         const response = await HttpAdapter.withAuthorization().get('/me')
         const { id, name, email } = response.data.data
         return new User(id, name, email)
       }
    }
