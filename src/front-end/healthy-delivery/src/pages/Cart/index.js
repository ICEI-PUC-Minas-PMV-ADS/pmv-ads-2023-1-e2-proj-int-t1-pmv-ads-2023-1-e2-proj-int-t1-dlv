import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Button, TextField, Autocomplete } from "@mui/material";

import CartStyle from "./style";
import { useAppProvider } from "../../providers";
import { NavBar, CartItem, Footer } from "../../components";

const Cart = () => {
    const { token, cartList } = useAppProvider()
    const navegade = useNavigate()

    const options = ['Crédito', 'Débito', 'Pix', 'Dinheiro'];
    const [value, setValue] = useState(options[0]);
    const [inputValue, setInputValue] = useState('');

    const handleClick = () => {
        if (!token){
            navegade('/login')
        }
    }

    return(
        <CartStyle>
            <NavBar type='cart' />
            <div className="main-container">
                <div className="orders">
                    {cartList.map( (order, key) => <CartItem order={order} key={key}/> )}
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
                        Total: R$ {cartList.reduce((x,y) => y.price + x, 0)}
                    </h1>
                    <Button
                        type="submit"
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        color="error"
                        onClick={handleClick}
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