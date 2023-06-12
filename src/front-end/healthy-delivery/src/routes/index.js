import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

import { AppProvider } from "../providers";
import { Home, Login, Signup, Dashboard, Cart } from "../pages";


const PageRoutes = () => {

    return(
        
            <AppProvider>
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
            </AppProvider>
    
    )
};

export default PageRoutes