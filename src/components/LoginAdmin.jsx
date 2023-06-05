import React, { useState } from 'react'
import FormControl from '@mui/material/FormControl';
import { InputLabel, Input, FormHelperText, Button, Container, Grid, Box, Avatar, TextField } from '@mui/material';
import '../styles/LoginAdmin.css'
import {useNavigate } from 'react-router-dom';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';

function LoginAdmin() {

  const navigate = useNavigate()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState({
    error: false, message:'',
  });


  const validaEmail =(email)=>{
    const regex = /^[adminLibrarius]+@[gmail]+\.[com]{2,}$/i;
    return regex.test(email);
  }

  const validaPwd =(password)=>{
    const regex = /^[adminlibrarius]$/i;
    return regex.test(password);
  }

  const handleSubmit =(e)=>{
    e.preventDefault();
    if (validaEmail(email)){
      setError({
        error:false, message:'',
      });
      console.log('Email correcto');
    } else {
      setError({
        error:true, message:'Email incorrecto',
      })
    }
    // navigate('/Admin', {replace:true, state:{logged:true}})
  }

  const handlePassword =(e)=>{
    e.preventDefault();
    if (validaPwd(password)){
      setError({
        error:false, message:'',
      });
      console.log('Contraseña correcta');
    } else {
      setError({
        error:true, message:'Contraseña incorrecta',
      })
    }
    // navigate('/Admin', {replace:true, state:{logged:true}})
  }

  
  return (
    <>
      <h2>¿Eres el administrador de Librarius?</h2>
      <Avatar className='avatar'><AutoStoriesIcon/></Avatar>
      <Box component='form' onSubmit={handleSubmit}>
        <TextField
        id='email'
        label='Email'
        type='email'
        variant='outlined'
        fullWidth
        helperText='Ingrese el correo del administrador'
        error={error.error}
        sx={{mt:5}}
        value={email}
        required
        onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
        id='pwd'
        label='Password'
        type='password'
        variant='outlined'
        fullWidth
        helperText='Ingrese la contraseña del administrador'
        error={error.error}
        required
        sx={{mt:3}}
        onChange={(e) => setPassword(e.target.value)}
        />
        <Button type='submit' variant='outlined' sx={{mt:2}}>Ingresar</Button>
      </Box>
    </>
  )
}

export default LoginAdmin