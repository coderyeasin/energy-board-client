import React from "react";
import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Navbar bg="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#" className="text-light">
            Visualization
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto my-2 my-lg-0"
              style={{ maxHeight: "100px", alignItems: "center" }}
              navbarScroll
            >
              <Link className=" text-dark" to="/home">
                <Button variant="info">Dashboard</Button>
              </Link>

              <Link to="/static" className="text-dark ms-2">
                <Button variant="success">Static</Button>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
