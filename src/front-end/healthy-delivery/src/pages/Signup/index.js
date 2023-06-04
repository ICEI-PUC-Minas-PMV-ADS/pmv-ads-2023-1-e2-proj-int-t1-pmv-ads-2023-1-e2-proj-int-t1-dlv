import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import SignupStyle from './style';
import { schemas } from '../../services';
import { NavBar } from '../../components';


const Signup = () => {

const { register, handleSubmit, formState:{errors} } = useForm({resolver: yupResolver(schemas.signup)});

const handleForm = data => console.log(data);


  return (
       <SignupStyle>
            <NavBar type='signup'/>
            <Container component="main" maxWidth="xs">
                <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
                >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Cadastro
                </Typography>
                <Box component="form" noValidate onSubmit={handleSubmit(handleForm)} sx={{ mt: 3 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                            autoComplete="given-name"
                            name="firstName"
                            required
                            fullWidth
                            id="firstName"
                            label="Nome"
                            autoFocus
                            {...register('name')}
                            error={!!errors.name}
                            helperText={errors.name?.message}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                            required
                            fullWidth
                            id="email"
                            label="E-mail"
                            name="email"
                            autoComplete="email"
                            {...register('email')}
                            error={!!errors.email}
                            helperText={errors.email?.message}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                            required
                            fullWidth
                            name="password"
                            label="Senha"
                            type="password"
                            id="password"
                            autoComplete="new-password"
                            {...register('password')}
                            error={!!errors.password}
                            helperText={errors.password?.message}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                            required
                            fullWidth
                            id="confirm_password"
                            label="Confirmar senha"
                            name="confirm_password"
                            autoComplete="confirm_password"
                            {...register('confirm_password')}
                            error={!!errors.confirm_password}
                            helperText={errors.confirm_password?.message}
                            />
                        </Grid>
                    </Grid>
                    <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    >
                    Fazer cadastro
                    </Button>
                    <Grid container justifyContent="flex-end">
                    <Grid item>
                        <Link href="/login" variant="body2">
                        Já é cadastrado? Logar
                        </Link>
                    </Grid>
                    </Grid>
                </Box>
                </Box>
            </Container>
       </SignupStyle> 
  );
};

export default Signup;
