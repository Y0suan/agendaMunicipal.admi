import FullCalendar from '@fullcalendar/react'
import daygridPlugin from '@fullcalendar/daygrid'
import esLocale from '@fullcalendar/core/locales/es';
import styled from 'styled-components';
import React, { useEffect } from 'react';
import getAll from '../function/getAll';


import firebaseApp from '../firebase/credenciales';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import ModalEditar from './ModalEditar';

const Cont = styled.div`
height:100vh;
width: 80%;
padding: 5px;
background-color: white;
border-radius: 5px;
.fc-daygrid-day-number{
  color: black;
  text-decoration: none;
  font-weight:300;
}
.fc-col-header-cell-cushion{
  color: black;
  text-decoration: none;
}
.fc-scrollgrid-sync-inner{

}
.fc-button{
  background-color: white;
  color: #5c5b5b;
  font-weight: 600;
  border-radius: 3px;
  border-color: transparent;
  padding:7px;
  font-size: rem;
  font-weight: 400;
}
.fc-toolbar-chunk{
  padding: 3px;
  height: auto;
}
.fc-toolbar-title{
  text-transform: capitalize;
  font-size: 1.4rem;
}
--fc-today-bg-color:#0d6dfd0;
--fc-button-active-bg-color: #0d6efd;
--fc-button-active-border-color: #151e270;
--fc-button-hover-bg-color: #5294f8;
--fc-button-hover-border-color: #1a252f0;
.fc-day-today{
  .fc-daygrid-day-number{
    background-color: #0d6efd;
    color:white;
    border-radius: 100%;
    padding: 1px 3px;
  }
  
}
`





function Calendario(info) {

  const [eventos,setEventos] = React.useState([]);

//traer eventos
  function actualizarEstadoEvento(){
    getAll().then((eventos)=>{
      setEventos(eventos);
    });
  };

  React.useEffect(()=>{
    actualizarEstadoEvento();
  },[]);






  return (
    <Cont>
       <FullCalendar 
       height={'100%'}
       handleWindowResize={true}
       navLinks={true}   
    
       locale={esLocale}
       headerToolbar={{
        start:'today prev next',
        center:'title',
        end: 'dayGridMonth dayGridWeek dayGridDay'
       }}
       plugins={[daygridPlugin]}
       views={['dayGridMonth','dayGridWeek','dayGridDay',]}
       
       
       events={eventos}

       ></FullCalendar>


    </Cont>
  )
}

export default Calendario