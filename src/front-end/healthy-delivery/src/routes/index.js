import { Routes, Route, Navigate } from "react-router-dom";

import { useAppProvider } from "../providers";
import { Home, Login, Signup, Dashboard, Cart } from "../pages";


const PageRoutes = () => {

    return(
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/signup" element={<Signup />}/>
            <Route 
                path="/cart" 
                element={<Cart /> }
            />
            <Route 
                path="/dashboard" 
                element={<Dashboard />}
            />
        </Routes>
    )
};

export default PageRoutes