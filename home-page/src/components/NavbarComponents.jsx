import { useState, useEffect} from "react";

import { Navbar, Container, Nav, Form, Row, Col, Button} from "react-bootstrap";
import {navLinks} from '../data/index';
import { NavLink } from "react-router-dom";

const NavbarComponents = () => {

    const [changeColor, setChangeColor] = useState(false);
    
    const changeBackgroundColor = () => {
      if (window.scrollY > 10) {
        setChangeColor(true);
      }else{
        setChangeColor(false);
      }
    }

    useEffect(() =>{
      changeBackgroundColor();

      window.addEventListener('scroll', changeBackgroundColor);
    })
    const isInline = true;  // Asumsi nilai boolean
    // Cek isi data navLinks untuk memastikan bentuknya sesuai
  console.log(navLinks);
  return (
    <div>
      <Navbar expand="lg"  className={changeColor ? "color-active" : ""}>

        <Container>
          <Navbar.Brand href="#home" className="text-dark fs-3 fw-bold">SMPIT TAROS</Navbar.Brand>
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

            {/* searching */}
            <div className="mx-auto text-center">
              <Form inline={isInline.toString()} className="mx-auto text-center">
                <Row>
                  <Col xs="auto" className="text-center">
                    <Form.Control
                      type="text"
                      placeholder="Search"
                      className="mr-sm-2"
                    />
                  </Col>
                  {/* <Col xs="auto">
                    <Button type="submit" className="btn btn-outline-warning rounded-1 mx-auto text-center" style={{ backgroundColor: 'var(--navbar-color)' }}>Submit</Button>
                  </Col> */}
                </Row>
              </Form> 
            </div>
            {/* searching */}  

          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavbarComponents;
