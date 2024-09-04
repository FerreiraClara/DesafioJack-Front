import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import Router from './routes/router'
import './index.css'
export default function App(){

   return(
      <>
         <div style={{ display: 'grid', justifyContent: 'center', alignItems: 'center', width: '100vw' }}>
            <Router/>
         </div>
      </>
   )
}
