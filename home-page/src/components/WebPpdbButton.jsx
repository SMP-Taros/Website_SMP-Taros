import React from "react";
import { Link } from "react-router-dom";
 
function PpdbButton(){
    return (
        <div className='ppdb-button-container'>
            <div className='box'>
                <Link to='/ppdb/pendaftaran'>
                    <button className='button1'>Pendaftaran</button>
                </Link>
                <Link to='/ppdb/status-pendaftaran'>  
                    <button className='button2'>Status Pendaftaran</button>
                </Link>
                <Link to='/ppdb/pengumuman'>
                    <button className='button3'>Pengumuman</button>
                </Link>
            </div>
        </div>
    )
}

export default PpdbButton;