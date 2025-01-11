import React from "react";
import { Navbar, Nav, NavDropdown, Image } from "react-bootstrap";
import BrandLogo from "../assets/images/logo.png";
import "./StyleComponents/StyleNavigationBar.css";

const Navigationbar = () => {
  return (
    <div className="NavigationBar">
      <Navbar expand="lg" className="" data-bs-theme="">
        <Image className="BrandLogo" src={BrandLogo} alt="logo" />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto text-primary">
            <Nav.Link className="menu" href={"/"}>
              HOME
            </Nav.Link>
            <Nav.Link className="menu" href={"/aboutme"}>
              ABOUT
            </Nav.Link>
            <NavDropdown
              className="menu"
              title={<span className="DropdownSpan">SERVICES</span>}
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item className="menuDropdown" href={"/sulam-alis"}>
                SULAM ALIS
              </NavDropdown.Item>
              <NavDropdown.Item className="menuDropdown" href={"/sulam-bibir"}>
                SULAM BIBIR
              </NavDropdown.Item>
              <NavDropdown.Item
                className="menuDropdown"
                href={"/sulam-eyeliner"}
              >
                SULAM EYELINER
              </NavDropdown.Item>
              <NavDropdown.Item
                className="menuDropdown"
                href={"/laser-removal"}
              >
                LASER REMOVAL
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className="menu" href={"/academy"}>
              ACADEMY
            </Nav.Link>
            <Nav.Link className="menu" href={"/galery"}>
              GALERY
            </Nav.Link>
            <Nav.Link className="menu" href={"/contact"}>
              CONTACT
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navigationbar;
