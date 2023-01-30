import React from 'react'
import {Modal,Stack,Form,Button} from 'react-bootstrap'
import styled from 'styled-components'
import añadirEvento from '../function/añadirEvento'

import firebaseApp from '../firebase/credenciales'
import {getStorage,ref,uploadBytes,getDownloadURL} from 'firebase/storage'

const storage = getStorage(firebaseApp);

const ContDate = styled.div`
display: flex; 
.e{
    margin-right: 3px;
}
`


function ModalAñadir({isModalAñadir , setIsModalAñadir}){

    let urlDescarga ;
    const [categoria, setCategoria] = React.useState("");
    console.log(categoria)

    function añadirEventoModal(){

        //obtener info del formulario
        const title = document.getElementById('title').value;
        const start = document.getElementById('start').value;
        const end = document.getElementById('end').value;
        const descripcion = document.getElementById('descripcion').value;
        const encargado = document.getElementById('encargado').value;
        const contacto = document.getElementById('contacto').value;
        const color = document.getElementById('color').value;
        const ubicación = document.getElementById('ubicación').value;
        const prioridad = document.getElementById('prioridad').value;

        
        


        //enviar infotmacion a firebase 
        const infoEvento ={
            title,start,end,descripcion,encargado,color,contacto,ubicación,urlDescarga,prioridad,categoria
        };
        añadirEvento(infoEvento);
        //cerrar modal 
        setIsModalAñadir(false);


    }
    
    //subida de imagen
    async function fileHandler(e){
        //detectar archivo
        const archivoLocal = e.target.files[0];
        //subida a firebase
        const arcivoRef = ref(storage,`documentos/${archivoLocal.name}`);
        await uploadBytes(arcivoRef,archivoLocal);
        //obtener url
        urlDescarga = await getDownloadURL(arcivoRef);
        
    }
    return(
        <Modal show={isModalAñadir} onHide={()=>setIsModalAñadir(false)}>

            <Modal.Header>
                <Modal.Title>Añadir Evento</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                <Stack>
                        
                        <Form.Control className='mb-1' id='img' placeholder='Añade una Imagen' type='file' 
                        onChange={fileHandler}
                        />
                        <ContDate>
                        <Form.Control className='mb-1 e' id='title' placeholder='Titulo' type='text'/>
                        <Form.Control type="color" id="color" defaultValue="#34A853" title="Choose your color"/>
                        </ContDate>
                        <ContDate>
                        <Form.Control className='mb-1 e' id='ubicación' placeholder='Ubicación' type='text'/>
                        </ContDate>
                        <ContDate>
                         <Form.Control className='mb-1 e' id='start' placeholder='Fecha de inicio' type='date'/>
                         <Form.Control className='mb-1' id='end' placeholder='Fecha de fin' type='date'/>
                        </ContDate>                        
                        <ContDate>
                         <Form.Control className='mb-1 e' id='encargado' placeholder='Encargado' type='text'/>
                         <Form.Control className='mb-1' id='contacto' placeholder='Contacto' type='text'/> 
                        </ContDate>
                        <Form.Control className='mb-1' id='descripcion' placeholder='Descripcion' as="textarea" rows={3}/>
                        <Form.Control className='mb-1' id='prioridad' placeholder='Prioridad' type="number"/>

                        <Form.Select value={ categoria } onChange={ (event) => setCategoria( event.target.value)}>
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




                </Stack>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='sencondary' onClick={() => setIsModalAñadir(false)}>
                    Cancelar
                </Button>
                <Button variant='primary' onClick={añadirEventoModal} >
                    Añadir
                </Button>
            </Modal.Footer>

        </Modal>
    )
}

export default ModalAñadir