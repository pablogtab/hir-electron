import { createContext, PropsWithChildren, useReducer, useState } from 'react';
import { LoginService } from '../services/login-service';
import { systemMessage } from '../lib/messages';

interface UserContextProps extends UserState {
    login: (email: string, password: string) => void
    logout: () => void;
    loading: boolean
}

type UserState = {
    name: string;
    email: string;
    password: string;
    isLoggedIn: boolean;
}

type ReducerActions =
    | { type: 'login', payload: { email: string, password: string } }
    | { type: 'logout' }

const reducer = (state: UserState, action: ReducerActions): UserState => {
    switch (action.type) {
        case 'login': return { ...state, isLoggedIn: true, email: action.payload.email, password: action.payload.password }
        case 'logout': return { ...state, isLoggedIn: false }
    }
}


export const UserContext = createContext<UserContextProps>(null)



export const UserProvider = ({ children }: PropsWithChildren) => {

    const [loading, setLoading] = useState<boolean>(false)
    const [{ name, password, email, isLoggedIn }, dispatch] = useReducer(reducer, { name: '', password: '', email: '', isLoggedIn: false })

    const login = async (email: string, password: string) => {
        // LOGIN

        setLoading(true)
        LoginService.login(email, password).then(() => {
            dispatch({ type: 'login', payload: { email, password } })
            setLoading(false)
        }).catch(() => {
            systemMessage('Email o contraseña incorrecta')
            setLoading(false)
        })


    }

    const logout = () => {
        dispatch({ type: 'logout' })
    }

    return (
        <UserContext.Provider value={{ name, password, email, isLoggedIn, loading, login, logout }}>
            {children}
        </UserContext.Provider>
    )
}