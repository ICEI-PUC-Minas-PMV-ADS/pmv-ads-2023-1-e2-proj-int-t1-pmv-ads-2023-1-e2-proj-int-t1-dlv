import CartStyle from "./style";
import { NavBar, OrderCard } from "../../components";

const Cart = () => {

    let orders = []

    return(
        <CartStyle>
            <NavBar type='cart' />
            <div className="main-container">
                <div className="orders">
                    {orders.map( (order) => <OrderCard order={order}/> )}
                </div>
            </div>
        </CartStyle>
    )
}

export default Cart;