import {Route, Routes} from 'react-router-dom';
import Home from './pages/Home';


export default function Rotas(){
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/categoria/:slug" element={<Home/>}/>
        </Routes>
    )
}