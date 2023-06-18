import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useForm } from 'react-hook-form' 
import {yupResolver} from '@hookform/resolvers/yup'

import LoginStyle from './style';
import { schemas } from '../../services';
import { NavBar, Footer } from '../../components';
import { useAppProvider } from '../../providers';
import { Navigate, useNavigate } from 'react-router-dom';


const Login = () => {
  
  const { signIn, token } = useAppProvider()
  
  const history = useNavigate()
  console.log(token)
  if (token) {
    console.log(token)
    history('/dashboard')
  } 

  const {register, handleSubmit, formState: {errors}} = useForm({resolver: yupResolver(schemas.login)})
  const handleForm = async (data) => { 
    console.log(data);
    await signIn(data)
  }
 

  return (
      <LoginStyle>

        <NavBar type='login'/>
        <Container component="main" maxWidth="xs" sx={{position:"relative", top:"25px"}}>
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              height: '69vh'
            }}
          >
            <Typography component="h1" variant="h5">
              Login
            </Typography>
            <Box component="form" className='form-container' onSubmit={handleSubmit(handleForm)} noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                label="E-mail"
                id="email"
                name="email"
                autoComplete="email"
                autoFocus
                {...register('email')}
                error={!!errors.email}
                helperText={errors.email?.message}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Senha"
                type="password"
                id="password"
                autoComplete="current-password"
                {...register('senha')}
                error={!!errors.senha}
                helperText={errors.senha?.message}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Logar
              </Button>
              <Grid container>
                <Grid item>
                  <Link href="/signup" variant="body2">
                    {"Não possui um cadastro? Registrar-se"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
        <Footer />
      </LoginStyle>

  );
}

export default Login;