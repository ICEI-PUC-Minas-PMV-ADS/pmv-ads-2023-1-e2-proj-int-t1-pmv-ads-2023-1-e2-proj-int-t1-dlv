import * as React from 'react';
import { Link, Button } from '@mui/material';

import { NavBar, Footer } from "../../components";
import HomeStyle from "./style";


const Home = () => {
    return(
        <HomeStyle>
            <NavBar />
            <div className="main-container">
                <div className="div-buttons">
                    <h2>Começe agora a se alimentar de forma saudável!</h2>
                    <Button
                        type="submit"
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        color="warning"
                    >
                        <Link href={'/login'} underline="none" color={'#FFFFFF'}>Logar</Link> 
                    </Button>
                    <Button
                        type="submit"
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        color="secondary"
                    >
                        <Link href={'/dashboard'} underline="none" color={'#FFFFFF'}>Ver cardápio</Link> 
                    </Button>
                    <Button
                        type="submit"
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        color="success"
                    >
                        <Link href={'/signup'} underline="none" color={'#FFFFFF'}>Fazer cadastro</Link> 
                    </Button>
                </div>
            </div>
            <Footer />
        </HomeStyle>
    )
};

export default Home;