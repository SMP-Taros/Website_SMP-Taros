import React, { useState } from "react";
import { Link } from "react-router-dom";

function WebNavbar() {

    const [open, setOpen] = useState(false);

    const [active, setactivate] = useState(false);
    window.addEventListener("scroll", function () {
        if (this.window.scrollY > 150) {
            setactivate(true);
        } else {
            setactivate(false);
        }
    });

    return (
        <div className="navbar-container">
            <header className={active ? "activenav" : "nav"}>
                <div className="navbar-list">
                    <ul className="menu">
                        <li>
                            <Link className="link" to="/">HOME</Link>
                        </li>
                        <li>
                            <Link className="link" to="/profil">PROFIL</Link>
                        </li>
                        <li className="navbar-menu">
                            <div className="link" onClick={() => { setOpen(!open) }} >INFORMASI&#9660;</div>
                            <div className={`navbar-dropdown ${open ? 'active' : 'inactive'}`}>
                                <ul className="list">
                                    <li>
                                        <Link className="sub-link" to="/informasi-sekolah">SEKOLAH</Link>
                                    </li>
                                    <li>
                                        <Link className="sub-link" to="/informasi-kalender">KALENDER</Link>
                                    </li>
                                </ul>
                            </div>
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

export default WebNavbar;