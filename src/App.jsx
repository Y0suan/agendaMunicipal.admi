import './App.css'
import styled from 'styled-components'
import React from 'react'
import Home from './pages/Home'
import Login from './pages/Login'

import firebaseApp from './firebase/credenciales';

import{getAuth,onAuthStateChanged} from 'firebase/auth'
import Eventos from './pages/Eventos'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
const auth = getAuth(firebaseApp);


const Cont = styled.div`
width: 100%;
height: 100vh;
`

function App() {
const [usuario,setUsuario]=React.useState(null);

onAuthStateChanged(auth,(usuarioFirebase)=>{
  if(usuarioFirebase){
    setUsuario(usuarioFirebase);
  }else{
    setUsuario(null);
  }
});


  return (
    <Cont className="App">
      { usuario ? <Home/> : <Login/> }
      
    </Cont>
  )
}

export default App
