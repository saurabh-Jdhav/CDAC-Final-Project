import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import  web from "../Images/e-bg.png"
function Navbarcomp() {
  return (
    <>
      {[false].map((expand) => (
        <Navbar key={expand} bg="success" variant="dark" expand={expand} className="mb-3 sticky-top" >
          <Container fluid>
          {/* <img
                  src={web}
                  className="img-fluid animated"
                  alt="home img"
                  style="width:3%"
                  /> */}
          
            <Navbar.Brand href="/"><img
                  src={web}
                  className="img-fluid animated"
                  alt="home img"
                  style={{width: '6%'}}
                  />
                &nbsp;<strong> E-Pathology </strong></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  E-Pathology
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <hr className="h1"></hr>
                <Nav className="justify-content-end flex-grow-1 pe-3">

                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/login">Login</Nav.Link>
                  <Nav.Link href="/signup">Signup</Nav.Link>
                  <Nav.Link href="/contact">Contact</Nav.Link>
                  <Nav.Link href="/about">About</Nav.Link>
                  <Nav.Link href="/adminlogin">Admin</Nav.Link>
                  <Nav.Link href="/" onClick={()=>{sessionStorage.clear()}}>Logout</Nav.Link>
                  
                </Nav>
                
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Navbarcomp;