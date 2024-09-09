import { useState } from 'react'
import { Card, CardContent, TextField, Button } from '@mui/material'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import { Api } from '../service/Api';
import '../App.css'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showError, setShowError] = useState(false)
  const navigate = useNavigate()
  async function submitForm(){
    const response = await Api({email, password},'POST','/login').catch((err)=>{
      setShowError(true)
    })
    console.log(response)
    if(response?.success) navigate('/')
    if(response?.response?.token)localStorage.setItem('token',response?.response?.token)
    if(!response?.success) setShowError(true)
  }

  return (
    <>
      <Card style={{ minWidth: 400, backgroundColor: '#fff', minHeight: 275, borderRadius: 20 }}>
        <h1 style={{ fontWeight: 600, fontSize: 40 }}> Login </h1>
        <CardContent style={{ display: 'grid', gap: 25, padding: 30 }}>
          <TextField
            id="login-input"
            label="Email"
            type="email"
            variant="standard"
            value={email}
            style={{ marginTop: 0 }}
            onChange={function (e) {
              setEmail(e.target.value)
            }}
          />
          <TextField
            id="password-input"
            label="Senha"
            type="password"
            variant="standard"
            value={password}
            autoComplete="current-password"
            style={{ display: 'grid' }}
            onChange={function (e) {
              setPassword(e.target.value)
            }}
          />
          <a underline="none" style={{ fontSize: 12, fontFamily: 'Arial' }}> <Link to='/register' style={{ textDecoration: 'none', color: '#000' }}> Ainda não é cadastrado? <p style={{color:'#e73555c9'}}>Cadastre-se aqui</p> </Link> </a>
          <Button id='access-login-button' variant="contained" style={{ display: 'grid', marginBottom: 10, backgroundColor: '#ff3c5f', fontSize: 14, width: '100%' }} onClick={submitForm}> Acessar </Button>
          <div style={{width:"380px"}}><p style={{display:!showError?"none":"block", color:"#c33737",fontSize: 12,fontFamily: 'Arial'}}>Ocorreu um erro ao logar, verifique sua senha e tente novamente mais tarde</p></div>
        </CardContent>
      </Card>
    </>
  )
}

export default Login
