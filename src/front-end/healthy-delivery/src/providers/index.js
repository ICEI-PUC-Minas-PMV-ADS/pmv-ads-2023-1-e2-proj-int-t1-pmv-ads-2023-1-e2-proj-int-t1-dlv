import axios from 'axios'
import { toast } from "react-toastify";
import { useNavigate, Navigate } from 'react-router-dom';
import "react-toastify/dist/ReactToastify.css";
import {createContext, useContext, useState, useEffect} from 'react'

import { createAccount, createSession, api } from '../services/api';


const AppContext = createContext({})

const useAppProvider = () => useContext(AppContext)

const AppProvider = ({children}) => {

        const navigate = useNavigate()

        const [catalogue, setCatalogue] = useState([])
        const [cartList, setCartList] = useState([])
        const [token, setToken] = useState(() => localStorage.getItem("token") || "");
        const id = localStorage.getItem("userId")

    const signIn = async (userData) => {
        console.log(userData);
        const response = await createSession(userData);
        localStorage.setItem("token", JSON.stringify(response.data.token));
        localStorage.setItem("email", JSON.stringify(response.data.user.email));
        localStorage.setItem("nome", JSON.stringify(response.data.user.nome));   

        api.defaults.headers.Authorization = `Bearer ${response.data.token}`;
        setToken(response.data.token);

        navigate('/dashboard');

    };

    const signUp = async (userData) => {
        try {
            const response = await createAccount(userData);
            console.log(response);
            toast.success("Cadastro realizado com sucesso!");
            localStorage.setItem("token", JSON.stringify(response.data.token));
            localStorage.setItem("email", JSON.stringify(response.data.user.email));
            localStorage.setItem("nome", JSON.stringify(response.data.user.nome));

            navigate('/')
        } catch (error) {
            toast.error("Erro ao cadastrar!");
        }
    };
    
   

    // const toRegister = () => navigate.push("/register")
    // const toHome = () => navigate.push(`/home/${id}`)
    // const toCart = () => navigate.push("/cart")

    // const toLogin = () => {
    //     localStorage.clear()
    //     navigate.push("/")
    // }

    const logout = () => {
        localStorage.clear()
        setToken();
        return <Navigate to={'/login'}/>
    }

    return (
        <AppContext.Provider 
        value={{logout,
        signIn, signUp
        }}
        >
            {children}
        </AppContext.Provider>
    )

   
}

export {useAppProvider, AppProvider}