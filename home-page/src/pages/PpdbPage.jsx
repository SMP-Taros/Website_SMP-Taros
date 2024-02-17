import React from "react";
import WebBannerPpdb from "../components/WebBannerPpdb";
import WebPpdbButton from "../components/WebPpdbButton";
import Brosur from "../assets/img/brosurPpdb.png";

import { Link } from "react-router-dom";

function PpdbPage() { 
  const LinkForm = () => {
    const formURL = 'https://docs.google.com/forms/d/e/1FAIpQLSdUtl_e_reepnFwzTDJRf_UMUosbnOM4OEJO7ZRDqQXmE0HqA/viewform';
    window.open(formURL, '_blank');
  }; 
  return (
    <div className="ppdb-page"> 
      <WebBannerPpdb></WebBannerPpdb>
      <WebPpdbButton></WebPpdbButton>
      <div className='ppdb-page2'>SELAMAT DATANG</div>
      <div className='ppdbpage-main-container'>
            <div className='ppdbpage-main-isi'>
              <div className='orange-line' />
              <div className='text'>
                    Selamat Datang di Penerimaan Peserta Didik Baru <br/>
                    SMP IT Taqiyya Rosyida Kartasura<br/>
                    Tahun Pelajaran 2024 / 2025 telah dibuka.<br/>
                    Segera isi formulir pendaftaran dengan lengkap.<br/>
                    Segera isi formulir pendaftaran dengan lengkap.
                    Info lebih lanjut <Link className='link' to="/contact">Hubungi Kami</Link>
              </div>
                <button onClick={LinkForm} className='button-form'>
                    ISI FORMULIR KLIK DISINI
                </button> 
              <div className="img ">
                  <img src={Brosur} alt="brosurPpdb" />
              </div>
            </div>
      </div>
      <div className="ppdb-lanjut">
          <Link to='/ppdb/pendaftaran'>
                <button className='ppdb-main-button-next'>Next</button>
            </Link>
      </div>     
    </div> 
  )
}

export default PpdbPage;