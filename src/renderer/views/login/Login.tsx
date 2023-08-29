import './Login.css';

import { useContext, useEffect, useRef, useState } from 'react';

import { UserContext } from '../../context/userContext';
import { LoadingSpinner } from '../../components/LoadingSpinner/LoadingSpinner';

//import { toast, useToast } from 'react-toastify'



export const Login = () => {

    const { login, loading } = useContext(UserContext)
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const mailRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        mailRef.current.focus()
    }, [])

    return (
        <section className='screen'>
            <div className="login-card">
                <span>Bienvenido!
                    {loading && <LoadingSpinner/>}
                </span>
                <span className='form'>Email</span>
                <input type="text" value={email} onChange={(ev) => setEmail(ev.target.value)} ref={mailRef} />
                <span className='form' >Password</span>
                <input type="password" value={password} onChange={(ev) => setPassword(ev.target.value)} onKeyDown={(event) => {
                    if (event.code === 'Enter') login(email, password)
                }} />
                <button onClick={() => {
                    login(email, password)
                }}>Login</button>
            </div>
        </section>
    )
}