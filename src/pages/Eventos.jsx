import NavHome from '../components/NavHome';
import { Card , ListGroup , Button,Form,Stack} from 'react-bootstrap';
import styled from 'styled-components';
import MiniCalendario from '../components/MiniCalendario';
import React from 'react';
import { BsFillCalendarCheckFill } from 'react-icons/bs';
import getAll from '../function/getAll';
import eliminarEvento from '../function/eliminarEvento';


//modal
import ModalEditar from '../components/ModalEditar';
import Buscador from '../components/Buscador';

//buscar
import filtrarDatos from '../function/filtrarDatos';

const  Cont1 = styled.div`
width: 100%;
height: 100vh;
margin-top: 10vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
.buscador{
  width: 70%;
  height: 10vh;
  .in{
    height: 40px;
  }
}
.contCart{
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 90%;
  width: 100%;
  
}
  .contCart2{
    width: 80%;
    overflow: hidden;
    overflow-y: scroll;
    ::-webkit-scrollbar {
    display: none; 
  }
}
.topr{
  margin: 10px;
  display: flex;
  flex-direction: row;
  width: 98%;
  height: auto;
  box-shadow: 0px 5px 12px 0px #00000050;
  img{
    width: 20%;
    padding: 5px;
  }
  .datos{
    width: 60%;
    a{
      margin-left: 5px;
    }
  }
}
`


const  Cont = styled.div`
width: 70%;
height: 30%;
background-color: aqua;
display: flex;
img{
  width: 20%;
  height: 100%;
}
div{
  display: flex;
}
`



const Eventos = () => {

const [eventos,setEventos]=React.useState([]);
const [isModalEditar,setIsModalEditar]=React.useState(false);
const [eventoEditar,setEventoEditar]=React.useState({});

const [categoria, setCategoria] = React.useState("");


 function actualizarEstadoEventos(){
  getAll().then((eventos)=>{
    setEventos(eventos);
  });
 }

 React.useEffect(()=>{
  actualizarEstadoEventos();
 },[]);
 

async function busquedaFormHandler(e) {
  e.preventDefault();
  const busqueda = e.target.busqueda.value;
  const fecha = e.target.fecha.value;
  const cat = categoria;
  const nvosDocus = await filtrarDatos(busqueda,fecha,cat);
  setEventos(nvosDocus);
}



  return (
    <Cont1>


      <Form className='buscador' onSubmit={busquedaFormHandler}>
        <Stack direction="horizontal">

          <Form.Group controlId="busqueda" className="w-75 m-3 ">
            <Form.Control type="text" placeholder="Buscar" />
          </Form.Group>
          <Form.Group controlId="fecha" className="w-75 m-3 ">
            <Form.Control type="date" />
          </Form.Group>


          <Form.Select  id='cat' value={ categoria } onChange={ (event) => setCategoria( event.target.value)}>
            <option >Categorias</option>
            <option value="ambiente">Ambiente</option>
            <option value="carnaval">Carnaval</option>
            <option value="artes">Artes</option>
            <option value="convocatorias">Convocatorias</option>
            <option value="deportes-Y-Aire-Libre">Deportes y Aire Libre</option>
            <option value="economia-Social">Economia Social</option>
            <option value="jovenes">Jovenes</option>
            <option value="literatura">Literatura</option>
            <option value="online">Online</option>
            <option value="talleres">Talleres</option>
            <option value="salud">Salud</option>
            <option value="movilidad">Movilidad</option>
            <option value="musica">Musica</option>
            <option value="muestras">Muestras</option>
            <option value="visitas">Visitas Guiadas</option>
            <option value="teatro">Teatro</option>
            <option value="festivales">Festivales</option>
            <option value="ferias">Ferias y Mercados</option>
            <option value="infancias">Infancias</option>

          </Form.Select>




          <Button variant="dark" type="submit">
            Buscar
          </Button>
          <Button
            variant="light"
            onClick={() => {
              const input = document.getElementById("busqueda");
              const fecha = document.getElementById("fecha");
              const cat = document.getElementById("cat");
              input.value = "";
              fecha.value = '';
              cat.value= '';
              actualizarEstadoEventos();
            }}
          >
            Resetear
          </Button>
        </Stack>
      </Form>



<div className="contCart">
<div className="contCart2">
    {eventoEditar && (
      <ModalEditar
      isModalEditar={isModalEditar}
      setIsModalEditar={setIsModalEditar}
      actualizarEstadoEventos={actualizarEstadoEventos}
      eventoEditar={eventoEditar}
      setEventoEditar={setEventoEditar}
      />
    )}

    {eventos && eventos.map((evento,index)=>(
            <Card className='topr'>
            <Card.Img className='img' variant="top" src={evento.urlDescarga} />
           <div className='datos'>
            <Card.Body>
              <Card.Title>
                {evento.title}
                {/* <a href=""><BsFillCalendarCheckFill/></a> */}
              </Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{evento.start}</Card.Subtitle>
              <Card.Text>
                  {evento.descripcion}
              </Card.Text>
            </Card.Body>
            </div>
            <Card.Body> 
            <ListGroup className="list-group-flush">
              <ListGroup.Item>Encargado: {evento.encargado}</ListGroup.Item>
              <ListGroup.Item>Contacto: {evento.contacto}</ListGroup.Item>
              <ListGroup.Item>Categotia: {evento.categoria}</ListGroup.Item>
            </ListGroup> 
              <Button  size="sm" variant="primary"
              onClick={()=>{
                setEventoEditar({...evento});
                setIsModalEditar(true);
              }}
              >Editar</Button>

              <Button  size="sm" variant="outline-dark" 
              onClick={()=>{
                eliminarEvento(evento).then(
                  (confirmacion)=>{
                   actualizarEstadoEventos()  
                  });
              }} 
              >Eliminar</Button>
            </Card.Body>
          </Card>
    ))}
    </div>    
</div>
    </Cont1>
  )
}

export default Eventos