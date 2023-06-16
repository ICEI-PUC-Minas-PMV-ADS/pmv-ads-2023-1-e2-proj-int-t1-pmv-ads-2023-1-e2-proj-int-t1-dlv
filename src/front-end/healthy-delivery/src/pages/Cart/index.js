import { Button } from "@mui/material";

import CartStyle from "./style";
import { orders } from "../../services";
import { NavBar, CartItem, Footer } from "../../components";
import { Navigate } from "react-router-dom";
import { useAppProvider } from "../../providers";
import { useNavigate, redirect } from "react-router-dom";

const Cart = () => {

    let total = 0
    const {token} = useAppProvider()
    const navegade = useNavigate()

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