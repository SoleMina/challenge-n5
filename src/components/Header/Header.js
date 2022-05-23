import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import { useItemsContext } from "../../CartContext";
import { useDispatch, useSelector } from "react-redux";
import { login, selectUser } from "../../features/userSlice";

//Import from bootstrap
import { Navbar, Nav, Container } from "react-bootstrap";
//Import icon
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
//Import style
import styles from "./header.module.scss";

const Header = () => {
  const { changeMode, darkMode } = useItemsContext();

  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  useEffect(() => {
    dispatch(login(true));
  }, []);

  const changeHandle = () => {
    changeMode();
  };

  return (
    <div className="header">
      <Navbar
        collapseOnSelect
        expand="lg"
        variant="dark"
        className={`test ${darkMode ? "darkMode" : "lightMode"}`}
      >
        <Container>
          <Navbar.Brand as={Link} to="/">
            N5 Now Store
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
              <Nav.Link href="#">{user && "Welcome Karina"}</Nav.Link>
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
