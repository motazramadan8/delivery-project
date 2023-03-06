import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './App.css'

const NavBar = () => {
  return (
    <>
            <Navbar bg="light" expand="lg">
                <Container>
                <Navbar.Brand href="#home" style={{fontWeight: '500'}}>Delivery</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="m-auto">
                        <Nav.Link className='navlink active' style={{marginRight: "20px" , marginLeft: '50px' , fontWeight: '700'}} href="#home">Home</Nav.Link>
                        <Nav.Link className='navlink active ' style={{marginLeft: '50px' , fontWeight: '700'}} href="#link">About us</Nav.Link>
                        <Nav.Link className='navlink active ' style={{marginLeft: '50px' , fontWeight: '700'}} href="#home">Services</Nav.Link>
                        <Nav.Link className='navlink active ' style={{marginLeft: '50px' , fontWeight: '700'}} href="#link">Contact us</Nav.Link>
                        <Nav.Link className='navlink active ' style={{marginLeft: '50px' , fontWeight: '700'}} href="#home">
                        
                        </Nav.Link>
                    </Nav>

                    <Nav className="ms-auto">
                    <Nav.Link href="#home">
                        <button className='Order_b'>
                            <b style={{fontWeight: '500'}}>Order Now!</b>
                        </button>
                    </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
    </>
  )
}

export default NavBar
