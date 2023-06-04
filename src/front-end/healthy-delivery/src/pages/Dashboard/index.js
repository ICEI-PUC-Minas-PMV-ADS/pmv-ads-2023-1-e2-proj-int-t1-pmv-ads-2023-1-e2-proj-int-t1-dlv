
import { NavBar, OrderCard } from "../../components";
import { orders } from "../../services";
import DashboardStyle from "./style";

const Dashboard = () => {

    return(
        <DashboardStyle>
            <NavBar type='dashboard'/>
            <div className="main-container">
                <div className="orders">
                    {orders.map( (order) => <OrderCard order={order}/> )}
                </div>
            </div>
        </DashboardStyle>
    )
};

export default Dashboard;