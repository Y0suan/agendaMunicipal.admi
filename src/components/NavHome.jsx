import React from 'react'
import Nav from 'react-bootstrap/Nav';
import styled from 'styled-components';

import { BsFillCalendarWeekFill } from 'react-icons/bs';
import { NavLink } from 'react-bootstrap';
import BtnCLoseSecion from './BtnCLoseSecion';
import { Link } from 'react-router-dom';


const Cont = styled.div`
width: 100%;
height: auto;
display: flex;
align-items: center;
justify-content: center;
.logo{
  font-size: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: black;
.icon{
  background-color: #4285F4;
  color: white;
  width: 45px;
  height: 45px;
  padding: 5px;
  border-radius: 5px;
  margin-right: 15px;
}
h3{
  font-size: 1.5rem;
}
}
.nav{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .btn{
    height: 100%;
  }
}
`

const NavHome = () => {
  return (
    <Cont>
        <Nav
        className='nav'
          // onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
        >
          <NavLink className='logo' href='/' >
            <BsFillCalendarWeekFill className='icon'/><h3>Agenda Municipal</h3>
          </NavLink>

          {/* <Nav.Item>
            <Nav.Link href="/Eventos">Eventos</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1">Galeria</Nav.Link>
          </Nav.Item> */}
          <Nav.Item>
            <Nav.Link eventKey="link-2"></Nav.Link>
          </Nav.Item>
  
        </Nav>
    </Cont>
      );
}

export default NavHome