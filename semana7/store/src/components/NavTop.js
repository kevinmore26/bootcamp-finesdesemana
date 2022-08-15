import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Badge from "@material-ui/core/Badge";
import { useContext } from "react";
import { CarritoContext } from "../context/carritoContext";
import { AuthContext } from "../context/authContext";

import "../App.css";
export default function NavTop() {
  const { carrito } = useContext(CarritoContext);
  const { userState, signOut } = useContext(AuthContext);

  return (
    <Navbar expand="lg" className="fondoNavtop">
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
         

          <Link to="/carrito" className="nav-link">
            <Badge badgeContent={carrito.length} color="primary">
              <ShoppingCartIcon style={{ color: "grey" }} />
            </Badge>
          </Link>

          {userState ? (
            <NavDropdown
              title={
                <div className="d-inline">
                  <img
                    src={userState.photoURL}
                    className="me-2"
                    style={{ borderRadius: "50%", width: "30px" }}
                    alt="avatar"
                  />
                  <span>{userState.displayName}</span>
                </div>
              }
            >
              <NavDropdown.Item onClick={signOut}> Salir </NavDropdown.Item>
            </NavDropdown>
          ) : (
            <Link to="/login" className="nav-link">
              Ingresar
            </Link>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
