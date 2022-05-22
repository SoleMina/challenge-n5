import React from "react";
import { Link } from "react-router-dom";

//Import from bootstrap
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";

//Import icon
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

//Import component
import CartWidget from "../CartWidget/CartWidget";
import { useItemsContext } from "../../CartContext";

//Import style
import styles from "./header.module.scss";

const Header = () => {
  const { changeMode, darkMode } = useItemsContext();

  const changeHandle = () => {
    changeMode();
  };

  return (
    <div className="header">
      <Navbar
        collapseOnSelect
        expand="lg"
        variant="dark"
        className={"test " + `${darkMode ? "darkMode" : "lightMode"}`}
      >
        <Container>
          <Navbar.Brand as={Link} to="/">
            Karina Store
          </Navbar.Brand>
          <Nav.Link href="#">
            <div className="header__mobile">
              <button
                onClick={changeHandle}
                className={styles.btn}
                id="btnMode"
              >
                {darkMode ? "Light Mode" : "Dark Mode"}
              </button>
            </div>
          </Nav.Link>
          <Nav.Link
            eventKey={2}
            as={Link}
            to="/cart"
            className="header__mobile"
            style={{ position: "relative" }}
          >
            <CartWidget icon={faShoppingCart} class="mobile" />
          </Nav.Link>
          <Nav.Link
            eventKey={2}
            as={Link}
            to="/cart"
            className="header__desktop"
            style={{ position: "relative" }}
          ></Nav.Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#"></Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#"></Nav.Link>
              <NavDropdown title="Categorías" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="/category/laptop">
                  Laptops
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/category/tv">
                  Tv
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link
                className="header__mobile"
                eventKey={2}
                as={Link}
                to="/cart"
                style={{ position: "relative" }}
              >
                <CartWidget icon={faShoppingCart} class="desktop" />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
