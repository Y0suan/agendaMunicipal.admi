import React from 'react'
import BtnCLoseSecion from '../components/BtnCLoseSecion'
import Calendario from '../components/Calendario'
import MiniCalendario from '../components/MiniCalendario'
import styled from 'styled-components';
import NavHome from '../components/NavHome';

import Eventos from './Eventos';

const Pages = styled.div`
width: 100%;
display: flex;
flex-direction: column;
`



const Cont = styled.div`
display: flex;
width: 100%;
height: 100vh;
.cont2{
  width: 20%;
  display: flex;
  flex-direction: column;
  padding: 6px;
}
`


const Home = () => {
  return (
    <Pages>
    <Cont>
      <div className="cont2">
       <NavHome/>
       <MiniCalendario/> 
      </div>
      <Calendario/>   
    </Cont>
    <Eventos></Eventos>
    </Pages>
  )
}

export default Home