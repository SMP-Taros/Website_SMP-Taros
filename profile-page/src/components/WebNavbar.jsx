 import React, { useState } from "react";
 import { Link } from "react-router-dom";

function WebNavbar() {

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
                    <ul>
                        <li>
                            <Link className="link" to="/home">HOME</Link>
                        </li>
                        <li>
                            <Link className="link" to="/">PROFIL</Link>
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

export default WebNavbar;