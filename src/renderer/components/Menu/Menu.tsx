import { useContext } from 'react';
import './menu.css';

import { Link } from 'react-router-dom';
import { UserContext } from '../../../renderer/context/userContext';

export const Menu = () => {

    const { isLoggedIn } = useContext(UserContext)


    return <div className='menu' >
        {
            isLoggedIn ?
                <>
                    <Link to='/'>Welcome</Link>
                    <Link to='/'>Settings</Link>
                </>
                :
                <>
                    <Link to='/'>Login</Link>
                </>
        }
    </div>
}