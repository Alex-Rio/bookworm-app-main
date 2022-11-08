import React, { Component } from 'react';

import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';



//import NavDropdown from 'react-bootstrap/NavDropdown';


class Header extends Component{
    render(){
        return(
            <Navbar bg='light' expand="lg">

              <Navbar.Brand href="#"><h2>BookWorm</h2></Navbar.Brand>

                <Nav className='justify-content-end'>
                    <Nav.Item>
                        <Nav.Link href='/'><Link to="/" className='fs-3 text-dark'> Home</Link></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link><Link to="/shop" className='fs-3 text-dark'>Shop</Link></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link><Link to="/about" className='fs-3 text-dark'>About</Link></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link ><Link to="/cart"className='fs-3 text-dark'>Cart</Link></Nav.Link>
                    </Nav.Item>
                    {/* <Link to="/"> Home</Link>
                    <Link to="/shop"> Shop</Link>
                    <Link to="/about"> About</Link>
                    <Link to="/cart"> Cart</Link> */}
                    </Nav>
          </Navbar>
        );
    }

}
export default Header;
