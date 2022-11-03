import React, { Component } from 'react';
//import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
//import Form from 'react-bootstrap/Form';
//import imgLogo from '../../../css/bookworm_icon.svg';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Badge from 'react-bootstrap/Badge';


//import NavDropdown from 'react-bootstrap/NavDropdown';


class Header extends Component{
    render(){
        return(
            <Navbar bg='light' expand="lg">
            <Container >

              <Navbar.Brand href="#"><h2>BookWorm</h2></Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Nav
                  className="me-auto my-2 my-lg-0"
                  style={{ maxHeight: '100px',}}
                  navbarScroll
                />
                <Nav className='justify-content-end'>
                <Nav.Item>
                <Nav.Link href='#' >Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link href='#' >Store</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link href='#' >About</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link href='#' >Cart<Badge bg='danger'>1</Badge></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link href='#' >Login</Nav.Link>
                </Nav.Item>
                </Nav>



              </Navbar.Collapse>
            </Container>
          </Navbar>
        );
    }

}
export default Header;
