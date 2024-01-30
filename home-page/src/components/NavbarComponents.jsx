import React, { useState, useEffect} from "react";

import { Navbar, Container, Nav, Form, Row, Col, Button} from "react-bootstrap";
import {navLinks} from '../data/index';
import { Link } from "react-router-dom";

function NavbarComponents() { 
 
    const [active, setActivate] = useState(false);
    window.addEventListener("scroll", function () {
        if (this.window.scrollY > 100) {
            setActivate(true);
        } else {
            setActivate(false);
        }
    });

  return (
    <div className="navbar-container">
            <header className={active ? "activenav" : ""}>
                <div className="navbar-list">
                    <ul>
                    <li>
                        <Link to="/">HOME</Link>
                        </li>
                        <li>
                          <Link to="/profil">PROFIL</Link>
                        </li>
                        <li>
                          <Link to="/informasi">INFORMASI</Link>
                        </li>
                        <li>
                          <Link to="/pengumuman">PENGUMUMAN</Link>
                        </li>
                        <li>
                          <Link to="/berita">BERITA</Link>
                        </li>
                        <li>
                          <Link to="/ppdb">PPDB</Link>
                        </li>
                        <li>
                          <Link to="/contact">CONTACT</Link>
                        </li>
                    </ul>
                </div>
            </header>
        </div>
  )
}

export default NavbarComponents;
