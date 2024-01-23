import React, { useState } from "react";

function WebNavbar() {

    const [active, setactivate] = useState(false);
    window.addEventListener("scroll", function () {
        if (this.window.scrollY > 100) {
            setactivate(true);
        } else {
            setactivate(false);
        }
    });

    return (
        <div className="navbar-container">
            <header className={active ? "activenav" : ""}>
                <div className="navbar-list">
                    <ul>
                        <li>
                            <a href="#">HOME</a>
                        </li>
                        <li>
                            <a href="#">PROFIL</a>
                        </li>
                        <li>
                            <a href="#">INFORMASI</a>
                        </li>
                        <li>
                            <a href="#">PENGUMUMAN</a>
                        </li>
                        <li>
                            <a href="#">BERITA</a>
                        </li>
                        <li>
                            <a href="#">PPDB</a>
                        </li>
                        <li>
                            <a href="#">CONTACT</a>
                        </li>
                    </ul>
                </div>
            </header>
        </div>
    )
}

export default WebNavbar;