import DashboardStyle from "./style";
import { Footer, NavBar, OrderCard } from "../../components";
import { useAppProvider } from "../../providers";



const Dashboard = () => {

    const { selectedItens, getCatalogue } = useAppProvider()

    let orders = getCatalogue()

    if ( selectedItens ) {
        console.log('>>>>>', selectedItens)
        orders = selectedItens
    };

    return(
        <DashboardStyle>
            <NavBar type='dashboard'/>
            <div className="main-container">
                <div className="orders">
                    {orders.map( (order, key) => <OrderCard order={order} key={key}/> )}
                </div>
            </div>
            <Footer />
        </DashboardStyle>
    )
};

export default Dashboard;