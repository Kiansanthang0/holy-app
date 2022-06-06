import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo-HSS.png";
import vectorLogin from "../assets/img/vectorLogin.png";

const NavigationBar = () => {
  return (
    <div>
      <Navbar className="NavigationBar" collapseOnSelect expand="lg" variant="dark" fixed="top">
        <Container fluid>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className=" isi mx-auto">
              <Link to="/Event" className="teks">
                EVENT
              </Link>
              <Link to="/Schedule" className="teks">
                SCHEDULE
              </Link>
              <Link to="/Roster" className="teks">
                ROSTER
              </Link>
              <Link to="/">
                <img src={logo} className="d-inline-block align-top gambar" alt="Logo HSS"></img>
              </Link>
              <Link to="/News" className="teks">
                NEWS
              </Link>
              <Link to="/Watch" className="teks">
                WATCH
              </Link>
              <Link to="/Login" className="teks">
                <Button variant="link">
                  <img src={vectorLogin}></img>LOG IN
                </Button>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
