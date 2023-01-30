import React from 'react'
import FullCalendar from '@fullcalendar/react'
import daygridPlugin from '@fullcalendar/daygrid'
import styled from 'styled-components';
import esLocale from '@fullcalendar/core/locales/es';
import { Button } from 'react-bootstrap';
import getAll from '../function/getAll';



//Modales
import ModalAñadir from './ModalAñadir';
import Buscador from './Buscador';
//cerrar seccion
import BtnCLoseSecion from './BtnCLoseSecion';

const Cont = styled.div`
height: auto;
width: 100%;
margin-top: 10px;
display: flex;
flex-direction: column;
border-radius: 5px;
padding: 0 8px;

.calendar{
  margin-top: 20px;
  background-color: white;
  padding: 5px;
}


.fc{
  height: auto;
}
.fc-daygrid-day-number{
  color: black;
  text-decoration:none;
  font-weight:400;
}
.fc-col-header-cell-cushion{
  color: black;
  text-decoration: none;
}
.fc-scrollgrid-sync-inner{
  height: 20px;
  font-size: .7rem;
}
.fc-button{
  background-color: white;
  color: #5c5b5b;
  font-weight: 600;
  border-radius: 2px;
  border-color: transparent;
  padding: 0px 5px;
  font-size: 1rem;
}
.fc-toolbar-chunk{
  padding: 0px 5px ;
  height: auto;
  display: flex;
}
.fc-toolbar-title{
  text-transform: capitalize;
  font-size: 0.9rem;
}
--fc-today-bg-color:#0d6dfd0;
--fc-button-active-bg-color: #0d6efd;
--fc-button-active-border-color: #151e270;
--fc-button-hover-bg-color: #0d6dfd90;
--fc-button-hover-border-color: #1a252f0;
.fc-day-today{
  .fc-daygrid-day-number{
    /* background-color: #0d6dfd9d; */
    color:white;
    border-radius: 50%;  
    padding:5px; 
    color: black;
  }
}
.fc-daygrid-day-events{
  font-size: 0px;
  height: 30px;
  position: relative;
  
}
.fc-daygrid-event{
  position: absolute;
  top: -25px;
  width: 97%;
  height: 20px;
  z-index: 1;
  margin: 0;
  border-radius: 10px;
  
}
.fc-daygrid-day-top{
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  
}
.fc-daygrid-day-frame{
  min-height: 10px;
  
}
.fc-scrollgrid-sync-table{
  max-height: 300px;
  min-height: 200px;
  
} 
.fc-view-harness{
  min-height:40vh;
  width: 100%;
  background-color: white;

} 
.btn{
  margin:0px;
  width: 70%;
  padding: 10px;
  color: black;
  background-color: #dadada;
  border-color: transparent;
  box-shadow: 0px 5px 12px 0px #00000050;

}
.btn:hover{
  box-shadow: 0px 10px 28px 0px #00000050;

}
.fc-scroller-liquid-absolute{
  height: 300px;
  background-color: white;
}
`



const MiniCalendario = () => {
  
  const [isModalAñadir,setIsModalAñadir]=React.useState(false);

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



  function añadirEvento (){
    setIsModalAñadir(true);
  }

  return (
    <Cont>
      <ModalAñadir
      isModalAñadir={isModalAñadir}
      setIsModalAñadir={setIsModalAñadir}
      /> 
      
    <Button className='btn' onClick={añadirEvento} >Agregar Evento</Button>
      <div className="calendar">
    <FullCalendar
    locale={esLocale}
    headerToolbar={{
     start:'',
     center:'prev title next',
     end: 'today',
    }}
    plugins={[daygridPlugin]}
    views={['null']} 
    events={eventos}
    ></FullCalendar>
    </div>
    <BtnCLoseSecion/>
 </Cont>
  )
}

export default MiniCalendario