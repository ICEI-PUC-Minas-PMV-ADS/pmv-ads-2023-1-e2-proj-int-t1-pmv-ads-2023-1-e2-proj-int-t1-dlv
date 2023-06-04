import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { NavBar } from "../../components";
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
                        Logar
                    </Button>
                    <Button
                        type="submit"
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        color="success"
                    >
                        Registrar-se
                    </Button>
                </div>
            </div>
        </HomeStyle>
    )
};

export default Home;