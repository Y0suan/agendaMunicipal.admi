import React from 'react'
import {Modal,Stack,Form,Button} from 'react-bootstrap'
import styled from 'styled-components'
import añadirEvento from '../function/añadirEvento'

import {getStorage,ref,uploadBytes,getDownloadURL} from 'firebase/storage'


const ContDate = styled.div`
display: flex; 
.e{
    margin-right: 3px;
}
`


function ModalEditar({
    isModalEditar , 
    setIsModalEditar,
    actualizarEstadoEventos,
    eventoEditar,
    setEventoEditar,
}){

    const urlDescarga = eventoEditar.urlDescarga;
    const [categoria, setCategoria] = React.useState("");


    function editarEventoModal(){

        //obtener info del formulario
        const title = document.getElementById('title').value;
        const start = document.getElementById('start').value;
        const end = document.getElementById('end').value;
        const descripcion = document.getElementById('descripcion').value;
        const encargado = document.getElementById('encargado').value;
        const contacto = document.getElementById('contacto').value;
        const color = document.getElementById('color').value;
        const prioridad = document.getElementById('prioridad').value;

      
        

        //enviar infotmacion a firebase 
        const infoEvento ={title,start,end,descripcion,encargado,color,contacto,urlDescarga,prioridad,categoria
        };
        añadirEvento(infoEvento);
        //cerrar modal 
        setEventoEditar(null);
        actualizarEstadoEventos();
        setIsModalEditar(false);
    }

       
       
    
    const[eventoEstado,setEventoEstado]=React.useState({...eventoEditar});


 


    return(
        <Modal show={isModalEditar} onHide={()=>{
          setIsModalEditar(false);
          setEventoEditar(null);
        }} >

            <Modal.Header>
                <Modal.Title>{eventoEstado?.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                <Stack>

                        <ContDate>
                        <Form.Control 
                        className='mb-1 e' 
                        type="text" 
                        id="title" 
                        value={eventoEstado?.title}
                        onChange={(e)=>
                            setEventoEstado({
                              ...eventoEstado,
                              title: e.target.value  
                            })
                        }
                        />
                        <Form.Control 
                        type="color" 
                        id="color" 
                        defaultValue={eventoEstado?.color} 
                        onChange={(e)=>
                            setEventoEstado({
                              ...eventoEstado,
                            color: e.target.value  
                            })
                        }
                        />
                        </ContDate>
                        <Form.Control 
                        className='mb-1 e' 
                        id='ubicación' 
                        placeholder='Ubicación' 
                        type='text'
                        value={eventoEstado?.ubicación}
                        onChange={(e)=>
                          setEventoEstado({
                            ...eventoEstado,
                            ubicación: e.target.value  
                          })
                      }
                        />


                        <ContDate>
                         <Form.Control 
                         className='mb-1 e' 
                         id='start' 
                         placeholder='fecha de inicio' 
                         type='date'
                         value={eventoEstado?.start}
                         onChange={(e)=>
                             setEventoEstado({
                               ...eventoEstado,
                               start: e.target.value  
                             })
                         }
                         />
                         <Form.Control 
                         className='mb-1' 
                         id='end' 
                         placeholder='fecha de fin' 
                         type='date'
                         value={eventoEstado?.end}
                         onChange={(e)=>
                             setEventoEstado({
                               ...eventoEstado,
                               end: e.target.value  
                             })
                         }
                         />
                        </ContDate>                        
                        <ContDate>
                         <Form.Control 
                         className='mb-1 e' 
                         id='encargado' 
                         placeholder='encargado' 
                         type='text'
                         value={eventoEstado?.encargado}
                         onChange={(e)=>
                             setEventoEstado({
                               ...eventoEstado,
                               encargado: e.target.value  
                             })
                         }
                         />
                         <Form.Control 
                         className='mb-1' 
                         id='contacto' 
                         placeholder='contacto' 
                         type='text'
                         value={eventoEstado?.contacto}
                         onChange={(e)=>
                             setEventoEstado({
                               ...eventoEstado,
                               contacto: e.target.value  
                             })
                         }
                         /> 
                        </ContDate>
                        <Form.Control 
                        className='mb-1' 
                        id='descripcion' 
                        placeholder='descripcion' 
                        as="textarea" 
                        rows={3}
                        value={eventoEstado?.descripcion}
                        onChange={(e)=>
                            setEventoEstado({
                              ...eventoEstado,
                              descripcion: e.target.value  
                            })
                        }
                        />
                        <Form.Control 
                        className='mb-1' 
                        id='prioridad' 
                        placeholder='prioridad' 
                        type="number"  
                        value={eventoEstado?.prioridad}
                        onChange={(e)=>
                            setEventoEstado({
                              ...eventoEstado,
                              prioridad: e.target.value  
                            })
                        }
                        />



                        <Form.Select 
                        value={ categoria } 
                        onChange={ (event) => setCategoria( event.target.value)}>
                         <option value="todas">{eventoEstado?.categoria}</option>
                         <option value="ambiente">Ambiente</option>
                         <option value="artes">Artes</option>
                         <option value="carnaval">Carnaval</option>
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


                </Stack>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='sencondary' onClick={() =>{
                   setIsModalEditar(false);
                   setEventoEditar(null);
                }} >
                    Cancelar
                </Button>
                <Button variant='primary' onClick={editarEventoModal} >
                   Editar
                </Button>
            </Modal.Footer>

        </Modal>
    )
}

export default ModalEditar