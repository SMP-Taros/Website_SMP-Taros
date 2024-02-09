import React, { useState } from "react";

import { Navbar, Container, Nav, Form, Row, Col, Button } from "react-bootstrap";
import { navLinks } from '../data/index';
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
              <Link className="link" to="/">HOME</Link>
            </li>
            <li>
              <Link className="link" to="/profil">PROFIL</Link>
            </li>
            <li>
              <Link className="link" to="/informasi">INFORMASI</Link>
            </li>
            <li>
              <Link className="link" to="/pengumuman">PENGUMUMAN</Link>
            </li>
            <li>
              <Link className="link" to="/berita">BERITA</Link>
            </li>
            <li>
              <Link className="link" to="/ppdb">PPDB</Link>
            </li>
            <li>
              <Link className="link" to="/contact">CONTACT</Link>
            </li>
          </ul>
        </div>
      </header>
    </div>
  )
}

export default NavbarComponents;
