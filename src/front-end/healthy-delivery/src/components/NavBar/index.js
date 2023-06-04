import NavBarStyle from "./style";
import { Button } from "@mui/material";

const NavBar = ({type='default'}) => {

    let isLogin;
    let isSignUp;
    let isDashboard;
    let isHome;

    if (type === 'login') isLogin = true;
    if (type === 'signup') isSignUp = true;
    if (type === 'dashboard') isDashboard = true;
    if (type === 'default') isHome = true;


    return(
        <NavBarStyle>
            <div className="bar">
                <div className="logo">
                    <h1>Healthy delivery</h1>
                </div>
                {isLogin &&
                    <div className="div-buttons">
                        <Button
                            type="submit"
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            color="warning"
                        >
                        Home
                        </Button>
                    </div>
                }
                {isSignUp &&
                    <div className="div-buttons">
                        <Button
                            type="submit"
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            color="warning"
                        >
                        Home
                        </Button>
                    </div>
                }
                {isDashboard && 
                    <div className="div-buttons">
                        <Button
                            type="submit"
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            color="warning"
                        >
                            Home
                        </Button>
                        <Button
                            type="submit"
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            color="warning"
                        >
                            Carrinho
                        </Button>
                    </div>
                }
            </div>
        </NavBarStyle>
    )
};

export default NavBar;