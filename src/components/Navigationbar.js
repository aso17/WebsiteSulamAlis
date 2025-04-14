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
              Home
            </Nav.Link>
            <Nav.Link className="menu" href={"/aboutme"}>
              About
            </Nav.Link>
            <NavDropdown
              className="menu"
              title={<span className="DropdownSpan">Services</span>}
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item className="menuDropdown" href={"/sulam-alis"}>
                Sulam Alis
              </NavDropdown.Item>
              <NavDropdown.Item
                className="menuDropdown"
                href={"/remove-sulamalis"}
              >
                Hapus Sulam Alis
              </NavDropdown.Item>
              <NavDropdown.Item className="menuDropdown" href={"/sulam-bibir"}>
                Sulam Bibir
              </NavDropdown.Item>
              <NavDropdown.Item
                className="menuDropdown"
                href={"/sulam-eyeliner"}
              >
                Sulam Eyeliner
              </NavDropdown.Item>
              <NavDropdown.Item
                className="menuDropdown"
                href={"/laser-removal"}
              >
                Hapus Tato
              </NavDropdown.Item>
            </NavDropdown>
            {/* <Nav.Link className="menu" href={"/academy"}>
              ACADEMY
            </Nav.Link> */}
            <Nav.Link className="menu" href={"/galery"}>
              Galery
            </Nav.Link>
            <Nav.Link className="menu" href={"/contact"}>
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navigationbar;
