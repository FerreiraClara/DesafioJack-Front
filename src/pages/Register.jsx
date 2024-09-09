import React from 'react'
import { useEffect, useState } from 'react'
import { Card, CardContent, TextField, Button, Input, InputLabel, InputAdornment, FormControl, IconButton } from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Link } from 'react-router-dom'
import '../App.css'
import { Api } from '../service/Api'
import { useNavigate } from 'react-router-dom';
function Register() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [isValidForm, setIsValidForm] = useState(false)
  const [isValidPassword, setIsValidPassword] = useState(false)
  const [isValidEmail, setIsValidEmail] = useState(true);
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = React.useState(false);

  function handleClickShowPassword (){
    setShowPassword((show) => !show);
  }

  function handleMouseDownPassword (event) {
    event.preventDefault();
  };

  function handleMouseUpPassword (event) {
    event.preventDefault();
  };

  async function registerPerson() {
    
    if(!(name,email,password,confirmPassword)) return

    const newPerson = {
      name,
      email,
      password,
      confirmPassword
    }
    await Api(newPerson, "POST", '/register-person').then(()=>{
      navigate('/login')
    })
  
  }

  function validateEmail(email) {
    const regex = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  };

  function handleChangeEmail (e) {
    const inputEmail = e.target.value;
    setEmail(inputEmail);
    setIsValidEmail(validateEmail(inputEmail));
  };
  function handleChangePassword(e){
    const inputPassword = e.target.value
    setPassword(inputPassword);
  };
  function handleChangePasswordConfirm(e) {
    const inputPassword = e.target.value
    setConfirmPassword(inputPassword);
  };

  React.useEffect(()=>{
    const validated = name && (isValidEmail && email) && (password && confirmPassword && password == confirmPassword)
    setIsValidPassword(password==confirmPassword)
    setIsValidForm(validated)
  },[name,email,password,confirmPassword])

  return (
    <>
      <Card style={{ minWidth: 400, backgroundColor: '#fff', minHeight: 275, borderRadius: 20 }}>
        <h1 style={{ fontWeight: 600, fontSize: 40 }}> Cadastre-se </h1>
        <CardContent style={{ display: 'grid', gap: 25, padding: 30 }}>
          <FormControl sx={{ m: 1, margin: '0 !important' }} variant="standard">
            <InputLabel htmlFor="standard-adornment-password">Nome</InputLabel>
            <Input
            id="register-name-input"
              type="text"
              value={name}
              helperText={isValidEmail ? '' : 'Email invalido'}
              onChange={function (e) {
                setName(e.target.value)
              }}
            />
          </FormControl>          
          <FormControl sx={{ m: 1, margin: '0 !important' }} variant="standard">
            <InputLabel htmlFor="standard-adornment-password">Email</InputLabel>
            <Input
              id="register-email-input"
              type="email"
              value={email}
              helperText={isValidEmail ? '' : 'Email invalido'}
              error={!isValidEmail}
              onChange={function (e) {
                handleChangeEmail(e)
              }}
            />
          </FormControl>
          <FormControl sx={{ m: 1, margin: '0 !important' }} variant="standard">
            <InputLabel htmlFor="standard-adornment-password">Senha</InputLabel>
            <Input
              id="register-password-input"
              type={showPassword ? 'text' : 'password'}
              value={password}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    onMouseUp={handleMouseUpPassword}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              onChange={function (e) {
                handleChangePassword(e)
              }}
            />
          </FormControl>
          <FormControl sx={{ m: 1, margin: '0 !important' }} variant="standard">
            <InputLabel htmlFor="standard-adornment-password">Confirme sua senha</InputLabel>
            <Input
              id="register-confirm-password-input"
              error={!isValidPassword}
              type={showPassword ? 'text' : 'password'}
              value={confirmPassword}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    onMouseUp={handleMouseUpPassword}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              onChange={function (e) {
                handleChangePasswordConfirm(e)
              }}
            />
          </FormControl>
            <Button disabled={!isValidForm} onClick={registerPerson} id='continue-register-button' variant="contained"
              style={{ display: 'grid', float: 'right', marginBottom: 10, marginTop: 10, backgroundColor: !isValidForm?"#c5c5c5":'#ff3c5f', color: "#fff" }}>
              Continuar
            </Button>
        </CardContent>
      </Card>
    </>
  )
}

export default Register
