import {NavLink} from 'react-router-dom';
import Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import NavDropdown from "react-bootstrap/NavDropdown"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import FormControl from "react-bootstrap/FormControl"
import CartWidget from '../CartWidget/CartWidget'


function NavBarComp()  {
  return (
<>
<Navbar bg="light" expand="lg">
  <Container>
    <NavLink to="/">La Tiendita </NavLink>

    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
       <p> <NavLink to="/">Home</NavLink> </p> 
        <p><NavLink to="/">Sobre Nosotros </NavLink> </p> 
        <NavLink to='cart' className= {({ isActive}) => isActive ? 'active' : ''}>
        </NavLink>
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
        <CartWidget />
      </Form>
     
    </Navbar.Collapse>
  </Container>
</Navbar>

</>
          
    )
  }
export default NavBarComp;