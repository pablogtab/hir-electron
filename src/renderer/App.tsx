import { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { AppConfig } from '../../src/shared/configuration';

import { Menu } from './components/Menu/Menu';


const Sit = () => {
    return (
        <div>SIIIIIIT</div>
    )
}

const Home = () => {
    const [config, setConfig] = useState<AppConfig>()
    const handleClick = async () => {
        return
    }    

    const openFile = async () => {
        window.hirApi.getConfig().then((config) => {
            setConfig(config)
        })
    }

    return (
        <div style={{ width: '100%', height: '100%' }}>
            <div onClick={handleClick}>HOMEEEEEE</div>
            <div onClick={openFile}>OPEN FILE</div>
            {JSON.stringify(config)}
        </div>
    )
}

const App = () => {
    useEffect(() => {
        console.log(window)
    }, [])
    return (
        <HashRouter>
            <Menu />
            <Routes>
                <Route path="/" Component={Home} />
                <Route path="/settings" Component={Sit} />
            </Routes>
        </HashRouter>
    );
}



function render() {
    const root = createRoot(document.getElementById('root'))
    root.render(<App />);
}

render();