import React from 'react'
import styled from 'styled-components'
import { Button , Form , Carousel } from 'react-bootstrap'
import { BsFillCalendar2WeekFill } from 'react-icons/bs';
import loginEmailPassword from '../function/loginEmailPassword';



const Cont = styled.div`
height: 100vh;
width: 100%;
display: flex;
`

const Cont1 = styled.div`
height: 100vh;
width: 50%;
background-color: blue;
.Carrousel{
    width: 100%;
    height: 100vh;
    .img{
        height: 100vh;
    }
}
`

const Cont2 = styled.div`
height: 100vh;
width: 50%;
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
h1{
    width: 50%;
    font-weight: 600;
}
.form{
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
`


const Login = () => {


async function submitHandler(e){
  e.preventDefault();
  const correo = document.getElementById('correo').value;
  const contraseña = e.target.contraseña.value;
  await loginEmailPassword(correo,contraseña);

}



  return (
    <Cont>
        <Cont1>
        <Carousel fade className='Carrousel'>
      <Carousel.Item>
        <img
          className="img"
          src="https://eldorado.gob.ar/storage/posts/jjc62DZEde9JNeipA0mkVLQQkXdGVAtnSXAUtzlX.jpg"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="img"
          src="https://eldorado.gob.ar/storage/posts/63aern0tfnJhKLAOsN2gOZfgcc7clBej788aflwo.jpg"
    
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="img"
          src="https://eldorado.gob.ar/storage/posts/637/e86/2e9/637e862e9d4c3421054328.jpg"
        />
      </Carousel.Item>
    </Carousel>
        </Cont1>


        <Cont2  >
            <h1>Calendario Eldorado <BsFillCalendar2WeekFill/> </h1>
        <Form className='form' onSubmit={submitHandler} >
            <h2>Iniciar Secion</h2>
      <Form.Group className="mb-3">
        <Form.Label>Correo de Usuario</Form.Label>
        <Form.Control type="email" placeholder="Ingresar email" id='correo' />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Contraseña</Form.Label>
        <Form.Control type="password" placeholder="Contraseña" id='contraseña' />
      </Form.Group>
      <Button variant="primary" type="submit">
        Ingresar
      </Button>
    </Form>
        </Cont2>


    </Cont>
  )
}

export default Login