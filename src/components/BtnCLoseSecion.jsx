import React from 'react';
import { Button } from 'react-bootstrap';
import signOut from '../function/CerrarSecion';
import { IoExitOutline } from 'react-icons/io5';
import styled from 'styled-components';

const Btn = styled.button`
  margin: 10px 0px;
  width: 20%;
  padding: 10px;
  color: black;
  background-color: #dadada;
  border-radius: 5px;
  border-color: transparent;
  box-shadow: 0px 5px 12px 0px #00000050;
  :hover{
    box-shadow: 0px 10px 28px 0px #00000050;
  }
`


const BtnCLoseSecion = () => {
  return (

    <Btn
    onClick={signOut} >
        <IoExitOutline></IoExitOutline>
    </Btn>
  )
}

export default BtnCLoseSecion