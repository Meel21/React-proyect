import {NavLink} from 'react-router-dom';
import Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import FormControl from "react-bootstrap/FormControl"
import CartWidget from '../CartWidget/CartWidget'
import { FaShoppingCart } from "react-icons/fa";



function NavBarComp()  {
  return (
<>
<Navbar bg="light" expand="lg"> 
  <Container>

  <NavLink to="/">
      <img src='./burguer.jpg' width='70'/>
   </NavLink>

    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
       <NavLink to="/">    <Button variant="outline-secondary">Inicio</Button></NavLink>
        <NavLink to="/">   <Button variant="outline-secondary">Burguers</Button></NavLink> 
        <NavLink to="/">   <Button variant="outline-secondary">Brewery</Button></NavLink> 
        <NavLink to="/">   <Button variant="outline-secondary">Salads</Button></NavLink> 
        <NavLink to="/">   <Button variant="outline-secondary">Combos</Button></NavLink> 
        <NavLink to='cart' className= {({ isActive}) => isActive ? 'active' : ''}>
        </NavLink>
      </Nav>
        <FaShoppingCart />

     
    </Navbar.Collapse>
  </Container>
</Navbar>

</>
          
    )
  }
export default NavBarComp;