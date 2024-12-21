import React from "react";
import { Navbar, Nav, NavDropdown, Image } from "react-bootstrap";
import BrandLogo from "../assets/images/logo.png";
import "./StyleComponents/StyleNavigationBar.css";
import "./StyleComponents/StyleMobile.css";

const Navigationbar = () => {
  return (
    <div className="NavigationBar">
      <Navbar expand="lg" className="" data-bs-theme="">
        <Image className="BrandLogo" src={BrandLogo} alt="logo" />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto text-primary">
            <Nav.Link className="menu" href="/">
              Home
            </Nav.Link>
            <Nav.Link className="menu" href="/aboutme">
              About
            </Nav.Link>
            <NavDropdown
              className="menu"
              title={<span className="DropdownSpan">Services</span>}
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item className="menuDropdown" href="/sulam-alis">
                Sulam Alis
              </NavDropdown.Item>
              <NavDropdown.Item className="menuDropdown" href="/sulam-bibir">
                Sulam Bibir
              </NavDropdown.Item>
              <NavDropdown.Item className="menuDropdown" href="/sulam-eyeliner">
                Sulam Eyeliner
              </NavDropdown.Item>
              <NavDropdown.Item className="menuDropdown" href="/laser-removal">
                Laser Removal
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className="menu" href="#Academy">
              Academy
            </Nav.Link>
            <Nav.Link className="menu" href="#galery">
              Galery
            </Nav.Link>
            <Nav.Link className="menu" href="#Contact">
              Contact
            </Nav.Link>
            {/* <NavDropdown
              className="menu"
              title={<span className="DropdownSpan">Lainnya</span>}
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item className="menuDropdown" href="#Galery">
                Galery
              </NavDropdown.Item>
              <NavDropdown.Item className="menuDropdown" href="#Videos">
                Videos
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navigationbar;
