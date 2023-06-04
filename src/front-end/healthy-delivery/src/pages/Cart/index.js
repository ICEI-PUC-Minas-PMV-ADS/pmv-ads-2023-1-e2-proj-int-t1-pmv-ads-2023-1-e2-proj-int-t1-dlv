import { Button } from "@mui/material";

import CartStyle from "./style";
import { orders } from "../../services";
import { NavBar, CartItem } from "../../components";

const Cart = () => {

    let total = 0

    return(
        <CartStyle>
            <NavBar type='cart' />
            <div className="main-container">
                <div className="orders">
                    {orders.map( (order) => <CartItem order={order}/> )}
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
        </CartStyle>
    )
}

export default Cart;