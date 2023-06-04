import Button  from "@mui/material/Button";
import Badge from "@mui/material/Badge";

import NavBarStyle from "./style";

const NavBar = ({type='default'}) => {

    let isSignUpIn;
    let isDashboard;
    let isCart;

    if (type === 'cart') isCart = true;
    if (type === 'dashboard') isDashboard = true;
    if (type === 'signup' || type === 'login') isSignUpIn = true;


    return(
        <NavBarStyle>
            <div className="bar">
                <div className="logo">
                    <h1>Healthy delivery</h1>
                </div>
                {isSignUpIn &&
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
                        <Badge
                            anchorOrigin={{vertical: 'top', horizontal: 'right'}}
                            badgeContent={4}
                            color="success"
                        >
                            <Button
                                type="submit"
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                                color="warning"
                            >
                                Carrinho
                            </Button>
                        </Badge>
                    </div>
                }
                {isCart && 
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
                            Dashboard
                        </Button>
                    </div>
                }
            </div>
        </NavBarStyle>
    )
};

export default NavBar;