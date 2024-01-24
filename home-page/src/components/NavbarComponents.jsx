import { useState, useEffect} from "react";

import { Navbar, Container, Nav, Form, Row, Col, Button} from "react-bootstrap";
import {navLinks} from '../data/index';
import { NavLink } from "react-router-dom";

const NavbarComponents = () => { 

 
    const [active, setActivate] = useState(false);
    window.addEventListener("scroll", function () {
        if (this.window.scrollY > 100) {
            setActivate(true);
        } else {
            setActivate(false);
        }
    });
    // Cek isi data navLinks untuk memastikan bentuknya sesuai
  console.log(navLinks);
  return (
    <div>
      <Navbar expand="lg"  className={active ? "activenav" : ""}>

        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            
            {/* dibawah ini adalah component navbar untuk ke halaman lain */}
            <Nav className="ms-auto text-center">
              {navLinks.map((link) => {
                return <div className="nav-link" key={link.id}>
                  <NavLink to={link.path} className={({ isActive, isPending }) =>{ 
                     // Gunakan conditional classNames untuk menentukan kelas yang aktif
                    isPending ? "pending" : isActive ? "active" : ""}} end>
                    {link.text}
                  </NavLink>
                </div>
              })}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavbarComponents;
