import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from "../pages/Home"
import Login from "../pages/Login"
import Register from "../pages/Register"
import Tasks from "../pages/Tasks"
import Profile from "../pages/Profile"
import AppBar from "../components/AppBar";
import "../index.css";

const routers =[
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/Register",
    element: <Register/>,
  },
  {
    path: "/Login",
    element: <Login/>,
  },
  {
    path: "/Task",
    element: <Tasks/>,
  },
  {
    path: "/Profile",
    element: <Profile/>,
  },
];

export default function Router(){
  return (
  <React.StrictMode>
    <BrowserRouter basename="/">
      <AppBar/>
      <Routes>
        {routers.map((router)=> <Route path={router.path} element={router.element} />)} 
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
  )
}

