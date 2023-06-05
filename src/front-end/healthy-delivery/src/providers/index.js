import axios from 'axios'
import { toast } from "react-toastify";
import { useNavigate, Navigate } from 'react-router-dom';
import "react-toastify/dist/ReactToastify.css";
import {createContext, useContext, useState, useEffect} from 'react'

import { api } from '../services';


const AppContext = createContext({})

const useAppProvider = () => useContext(AppContext)

const AppProvider = ({children}) => {

        const navigate = useNavigate()

        const [catalogue, setCatalogue] = useState([])
        const [cartList, setCartList] = useState([])
        const [token, setToken] = useState(() => localStorage.getItem("token") || "");
        const id = localStorage.getItem("userId")

    const signIn = (userData) => {
        
        axios.post(`${api}/logar`, userData)
        .then((response) => {
            localStorage.setItem("token", response.data.accessToken);
            localStorage.setItem("userId", response.data.user.id);
            localStorage.setItem("cart", response.data.user.cart);
            
            setToken(response.data.accessToken);

            setCartList(response.data.user.cart)

            if(cartList.length === 0){
                toast.info("seu carrinho está vazio")
            }
            navigate('/dashboard')  
        })
        .catch((err) => {
            toast.error('E-mail e/ou senha inválidos!')
            setToken('ELIGNEORIJBGNREOIBNOEI')
            navigate('/dashboard')  
        }); 

    };

    const signUp = (registerData) => {
        axios.post(`${api}/cadstrar`, registerData)
        .then((resp) => {
            toast.success('Conta criada com sucesso!')
            return navigate("/")
        }).catch((err) => toast.error('E-mail já cadastrado!'))
    }


    const addToCart = (item) => {

        const newItem ={
            name: item.name,
            type: item.type,
            img: item.img,
            price: item.price,
            code: Math.floor(Math.random()* (1000000 - 1) + 1),
            quantity: 1
        }

        cartList.push(newItem)

        axios.patch(`${api}/users/${id}`, 
        {cart: cartList }, {
        headers : {Authorization: `Bearer ${token}`}})
        .then((resp) => localStorage.setItem("cart", JSON.stringify(cartList)))
    }

    const removeToCart = (item) => {
        axios.get(`${api}/users/${id}`, 
        {headers : {Authorization: `Bearer ${token}`}})
        .then((resp) => setCartList(resp.data.cart))
        

        const result = cartList.filter((elt) => elt !== item)
       
        axios.patch(`${api}/users/${id}`, {cart: result }, {
            headers : {Authorization: `Bearer ${token}`}}).then((resp) => localStorage.setItem("cart", JSON.stringify(resp.data.cart))) 
    }

    const removeAll = () => {

        axios.patch(`${api}/users/${id}`, 
        {cart: []}, {headers : {Authorization: `Bearer ${token}`}})

    }
    
   

    // const toRegister = () => navigate.push("/register")
    // const toHome = () => navigate.push(`/home/${id}`)
    // const toCart = () => navigate.push("/cart")

    // const toLogin = () => {
    //     localStorage.clear()
    //     navigate.push("/")
    // }

    const logout = () => {
        localStorage.clear()
        return <Navigate to={'/login'}/>
        setToken()
    }

    return (
        <AppContext.Provider 
        value={{catalogue, cartList, token, logout,
        signIn, signUp, addToCart, removeToCart, removeAll, logout
        // toRegister, toLogin, toCart, toHome
        }}
        >
            {children}
        </AppContext.Provider>
    )

   
}

export {useAppProvider, AppProvider}