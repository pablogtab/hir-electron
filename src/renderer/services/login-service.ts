import { api } from "../lib/api-connection";




export class LoginService {

    static login(email: string, password: string): Promise<{ access_token: string }> {
        return api.post('/login/login/', { email, password })
    }
    
}