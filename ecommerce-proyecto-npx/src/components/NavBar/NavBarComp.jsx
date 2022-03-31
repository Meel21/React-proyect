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
    <Nav.Link to="/">La Tiendita </Nav.Link>

    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <NavLink href="#action1">Home</NavLink>
        <NavLink href="#action2">Sobre Nosotros </NavLink>
        <NavDropdown title="Productos" id="navbarScrollingDropdown">
          <NavLink to="categoria/tortas">Tortas</NavLink>
          <NavLink to="categoria/dulces">Dulces</NavLink>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">
            Something else here
          </NavDropdown.Item>
        </NavDropdown>
        <NavLink to='cart' className= {({ isActive}) => isActive ? 'active' : ''}>
        <CartWidget />
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
      </Form>
     
    </Navbar.Collapse>
  </Container>
</Navbar>

</>
          
    )
  }
export default NavBarComp;