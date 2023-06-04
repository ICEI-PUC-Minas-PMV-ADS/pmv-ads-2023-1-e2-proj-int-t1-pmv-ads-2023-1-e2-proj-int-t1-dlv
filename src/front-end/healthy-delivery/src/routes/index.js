import { Routes, Route, Navigate } from "react-router-dom";

import { Home, Login, Signup, Dashboard, Cart } from "../pages";


const PageRoutes = () => {

    const token = false

    return(
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/signup" element={<Signup />}/>
            <Route 
                path="/cart" 
                element={token ? <Cart /> : <Navigate to={"/login"} />}
            />
            <Route 
                path="/dashboard" 
                element={token ? <Dashboard /> : <Navigate to={"/login"} />}
            />
        </Routes>
    )
};

export default PageRoutes