import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate, Navigate } from 'react-router-dom';
import {createContext, useContext, useState} from 'react';

import { createAccount, createSession, getOrders, getOrderByName, api } from '../services/api';


const AppContext = createContext({})

const useAppProvider = () => useContext(AppContext)

const AppProvider = ({children}) => {

        const navigate = useNavigate()
        const id = localStorage.getItem("userId")

        const [selectedItens, setSelectedItens] = useState([]);
        const [catalogue, setCatalogue] = useState([]);
        const [token, setToken] = useState(() => localStorage.getItem("token") || "");
        const [cartList, setCartList] = useState(JSON.parse(localStorage.getItem("cartList")) || []);        

    const signIn = async (userData) => {
        console.log(userData);
        const response = await createSession(userData);
        localStorage.setItem("token", JSON.stringify(response.data.token));
        localStorage.setItem("email", JSON.stringify(response.data.user.email));
        localStorage.setItem("nome", JSON.stringify(response.data.user.nome));   

        api.defaults.headers.Authorization = `Bearer ${response.data.token}`;
        setToken(response.data.token);

        navigate('/cart');

    };

    const signUp = async (userData) => {
        try {
            const response = await createAccount(userData);
            toast.success("Cadastro realizado com sucesso!");
            localStorage.setItem("token", JSON.stringify(response.data.token));
            localStorage.setItem("email", JSON.stringify(response.data.user.email));
            localStorage.setItem("nome", JSON.stringify(response.data.user.nome));

            navigate('/')
        } catch (error) {
            toast.error("Erro ao cadastrar!");
        }
    };
    
    const logout = () => {
        localStorage.clear()
        setToken();
        return <Navigate to={'/login'}/>
    };

    const addToCart = (item) => {
        let storageList = JSON.parse(localStorage.getItem("cartList")) || []
        item.cartId =  Math.random() *(1000 - 1) + 1
        storageList.push(item)

        localStorage.setItem("cartList", JSON.stringify(storageList))

        setCartList(storageList)
    };

    const removeToCart = (item) => {
        const storageList = JSON.parse(localStorage.getItem("cartList")) || []
        const filteredList = storageList.filter((elt) => elt.cartId !== item.cartId)

        localStorage.setItem("cartList", JSON.stringify(filteredList))
        setCartList(filteredList)
    };

    const getCatalogue = async () => {
        const orders = await getOrders()
        setCatalogue(orders)
        return orders
    };

    const getItem = async ( item ) => {
        const orders = await getOrderByName(item) || []
        setSelectedItens(orders)
    };

    return (
        <AppContext.Provider 
            value = {{ 
                logout,
                signIn, 
                signUp, 
                getItem,
                addToCart, 
                getCatalogue, 
                removeToCart, 
                cartList,
                catalogue, 
                selectedItens,
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

export {useAppProvider, AppProvider}