import * as React from 'react';
import { useNavigate, redirect } from "react-router-dom";
import { Button, TextField, Autocomplete } from "@mui/material";

import CartStyle from "./style";
import { orders } from "../../services";
import { Navigate } from "react-router-dom";
import { useAppProvider } from "../../providers";
import { NavBar, CartItem, Footer } from "../../components";

const Cart = () => {

    let total = 0
    const {token} = useAppProvider()
    const navegade = useNavigate()

    const options = ['Crédito', 'Débito', 'Pix', 'Dinheiro'];
    const [value, setValue] = React.useState(options[0]);
    const [inputValue, setInputValue] = React.useState('');

    if (!token){
        navegade('/login')
    }

    return(
        <CartStyle>
            <NavBar type='cart' />
            <div className="main-container">
                <div className="orders">
                    {orders.map( (order, key) => <CartItem order={order} key={key}/> )}
                </div>
                <div className="pay-info">
                    <div className='pay-method'>
                        <br />
                        <Autocomplete
                            value={value}
                            onChange={(event, newValue) => {
                            setValue(newValue);
                            }}
                            inputValue={inputValue}
                            onInputChange={(event, newInputValue) => {
                            setInputValue(newInputValue);
                            }}
                            id="controllable-states-demo"
                            options={options}
                            sx={{ width: 300 }}
                            renderInput={(params) => <TextField {...params} label="Forma de pagamento" />}
                        />
                    </div>
                    <h1>
                        Total: R$ {total}
                    </h1>
                    <Button
                        type="submit"
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        color="error"
                    >
                        Fazer pedido
                    </Button>
                </div>
                

            </div>
            <Footer />
        </CartStyle>
    )
}

export default Cart;