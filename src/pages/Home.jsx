import { useEffect, useState } from 'react'
import { Card, CardContent, TextField, Button } from '@mui/material'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import '../App.css'

function Home() {
  const navigate = useNavigate()
useEffect(()=>{
  if(!localStorage.getItem('token')) navigate('/login')
},[])
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center', gap: 50, minWidth: 300 }}>
      <Link to='/ask' style={{ textDecoration: 'none', color: '#000' }}><Button id='my-tasks-button' variant="contained" style={{ display: 'grid', backgroundColor: '#fff', borderRadius: 15, padding: 13, fontSize: 13, fontWeight: 600, color: '#000' }}> Minhas Tarefas </Button></Link>
      </div>
    </>
  )
}

export default Home
