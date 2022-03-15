import {Navbar,Nav,NavDropdown,Button,Container,Form,FormControl} from 'react-bootstrap';
import CartWidget from '../CartWidget/CartWidget';
import {Link} from 'react-router-dom';
import React from 'react';

const NavBarComp = () => {
  return (
    <>
<CartWidget />
<Navbar bg="light" expand="lg">
  <Container fluid>
    <Navbar.Brand href="#">La Tiendita</Navbar.Brand>

    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="#action1">Home</Nav.Link>
        <Nav.Link href="#action2">Sobre Nosotros</Nav.Link>
        <NavDropdown title="Productos" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">
            Something else here
          </NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="#" disabled>
          Contacto
        </Nav.Link>
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
          
      </>
    )
  }
export default NavBarComp;