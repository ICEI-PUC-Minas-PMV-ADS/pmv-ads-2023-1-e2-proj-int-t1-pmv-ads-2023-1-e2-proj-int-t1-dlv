
import { NavBar, OrderCard } from "../../components";
import { orders } from "../../services";
import DashboardStyle from "./style";
import { useNavigate } from "react-router-dom";

import { useAppProvider } from "../../providers";

const Dashboard = () => {

    const {token} = useAppProvider()

    const navigade = useNavigate()

    if (!token){
        navigade('/login')
    }


    return(
        <DashboardStyle>
            <NavBar type='dashboard'/>
            <div className="main-container">
                <div className="orders">
                    {orders.map( (order, key) => <OrderCard order={order} key={key}/> )}
                </div>
            </div>
        </DashboardStyle>
    )
};

export default Dashboard;