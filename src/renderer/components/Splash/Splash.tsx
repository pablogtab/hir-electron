import { useContext } from "react"
import { UserContext } from "../../context/userContext"
import { Route, Routes } from "react-router-dom"
import { Login } from "../../views/login/Login"
import { Home } from "../../views/home/Home"


export const Splash = () => {

    const { isLoggedIn } = useContext(UserContext)

    return (<>
        {
            isLoggedIn ?
                <Routes>
                    <Route path="/" Component={Home} />
                </Routes>
                :
                <Routes>
                    <Route path="/" Component={Login} />
                </Routes >
        }
    </>
    )

}