import { useState } from 'react'
import { Card, CardContent, TextField, Button } from '@mui/material'
import { Link } from 'react-router-dom'
import '../App.css'

function Login() {
  const [count, setCount] = useState(0)

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
            style={{ marginTop: 0 }}
          />
          <TextField
            id="password-input"
            label="Senha"
            type="password"
            variant="standard"
            autoComplete="current-password"
            style={{ display: 'grid' }}
          />
          <a underline="none" style={{ fontSize: 12, fontFamily: 'Arial' }}> <Link to='/register' style={{ textDecoration: 'none', color: '#000' }}> Ainda não é cadastrado? Cadastre-se aqui </Link> </a>
          <Link to='/' style={{ display: 'grid', justifyContent: 'center', textDecoration: 'none', color: '#fff' }}><Button id='access-login-button' variant="contained" style={{ display: 'grid', marginBottom: 10, backgroundColor: '#ff3c5f', fontSize: 14, width: '100%' }}> Acessar </Button></Link>
        </CardContent>
      </Card>
    </>
  )
}

export default Login
