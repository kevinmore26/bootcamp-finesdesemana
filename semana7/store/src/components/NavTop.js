import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Badge from "@material-ui/core/Badge";
import { useContext } from "react";
import { CarritoContext } from "../context/carritoContext";
import '../App.css'
export default function NavTop() {
  const { carrito } = useContext(CarritoContext);

  return (
    <Navbar  expand="lg" className="fondoNavtop" >
      <Container>
        <Navbar.Brand href="#home">DojopyStore</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className="nav-link">
              Inicio
            </Link>
            <Link to="/productos" className="nav-link">
              Productos
            </Link>
            

            
          </Nav>
          <Link to="/login" className="nav-link">
              Ingresar
          </Link>
          <Link to="/carrito" className="nav-link">
              <Badge badgeContent={carrito.length} color="primary" >
                <ShoppingCartIcon style={{color:'grey'}} />
              </Badge>
            </Link>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
