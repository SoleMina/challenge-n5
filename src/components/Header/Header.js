import React from "react";
import { Link } from "react-router-dom";

//Import from bootstrap
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";

//Import icon
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

//Import component
import CartWidget from "./CartWidget";

//Import style
import "./Header.scss";

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Karina Store
        </Navbar.Brand>
        <Nav.Link
          eventKey={2}
          as={Link}
          to="/cart"
          className="cart-counter-mobile"
          style={{ position: "relative" }}
        ></Nav.Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#"></Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#">Test</Nav.Link>
            <NavDropdown title="Categorías" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/category/laptop">
                Laptops
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/category/tv">
                Tv
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link
              eventKey={2}
              as={Link}
              to="/cart"
              className="cart-counter-desktop"
              style={{ position: "relative" }}
            >
              <CartWidget icon={faShoppingCart} className="cart-counter" />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
