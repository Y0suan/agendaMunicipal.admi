import React from 'react'
import {Modal,Stack,Form,Button} from 'react-bootstrap'
import styled from 'styled-components';
import { AiOutlineSearch } from 'react-icons/ai';


//buscar
import filtrarDatos from '../function/filtrarDatos';


const  Buscar = styled.div`
display:flex;
align-items: center;
justify-content: center;
margin-top: 10px;
width: 100%;
flex-direction: row;
.form{
    width: 90%;
    display: flex;
    align-items: center;
}
.e{
    width: 80%;
}
.btn{
    margin-left: 5px;
    height: 35px;
}
.icon{
    font-size: 30px;
}

`


const Buscador = () => {
    const [eventos,setEventos]= React.useState(false);

    async function busquedaFormHandler(e){
        e.preventDefault();
        const busqueda = e.target.busqueda.value;
        const nvosDocus = await filtrarDatos(busqueda);
        
    }

  return (
    <Buscar>
        <Form className='form' onSubmit={busquedaFormHandler} >
           <Form.Control className='mb-1 e' id='busqueda' placeholder='Buscar Evento' type='text'/>
           <Button  className='btn' size='sm'  >Buscar</Button> 
           <Button variant="secondary" >Resetear</Button>
        </Form>

    </Buscar>
  )
}

export default Buscador