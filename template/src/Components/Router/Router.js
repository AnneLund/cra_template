import {Routes, Route} from 'react-router-dom'
import Home from '../../Pages/Home';
import About from '../../Pages/About'
import Login from '../../Pages/Login/Login';
import { useLoginStore } from "../../Pages/Login/useLoginStore";
import { Notfound } from '../../Pages/Notfound';


const Router = () => {
const { loggedIn } = useLoginStore();  
  return (
    <Routes>
        <Route index path="/" element={<Home/>} />
        <Route path="about" element={<About/>}/>
        <Route path="login" element={<Login/>}/>
        {!loggedIn &&<Route path="/login" element={<Login />} />}
        {loggedIn && <Route path="/" />}
        <Route path="*" element={<Notfound/>} />
    </Routes>
  )
}

export default Router;
