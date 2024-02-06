import React from 'react'
import { Link } from 'react-router-dom';
 
function WebBannerButton() {
    const LinkForm = () => {
        const formURL = 'https://docs.google.com/forms/d/e/1FAIpQLSdUtl_e_reepnFwzTDJRf_UMUosbnOM4OEJO7ZRDqQXmE0HqA/viewform';
        window.open(formURL, '_blank');
    };
    return (
        <div className='bannerbtn-container'>
            <div className='box'>
                <div className='title'>Mari bergabung dengan kami, daftar sekarang!</div>
                <div className='text'>Penerimaan Peserta Didik Baru
                    tahun pelajaran 2024/2025 SMP IT TAQIYYA ROSYIDA telah dibuka. Segera isi formulir pendaftaran dengan lengkap.
                    Info lebih lanjut <Link className='link' to="/contact">Hubungi Kami</Link></div>
                <button onClick={LinkForm} className='button-form'>
                    ISI FORMULIR KLIK DISINI
                </button>
            </div>
        </div>
    )
}

export default WebBannerButton;
