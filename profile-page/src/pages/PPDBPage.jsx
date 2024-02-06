import React from 'react'
import WebHeader from '../components/WebHeader'
import WebNavbar from '../components/WebNavbar'
import WebFooter from '../components/WebFooter'
import WebBannerButton from '../components/WebBannerButton'
import WebPPDBButton from '../components/WebPPDBButton'
<<<<<<< HEAD
  
=======
import { Link } from 'react-router-dom'

>>>>>>> 238512a6ea8c3495daefa215b6b4e8478e81362e
function PPDBPage() {
    return (
        <div>
            <WebHeader /> 
            <WebNavbar />
            <WebBannerButton />
            <WebPPDBButton />
            <div className='ppdbpage-informasi'>Informasi Pendaftaran</div>
            <div className='ppdbpage-container'>
                <div className='ppdbpage-isi'>
                    <div className='box'>
                        <div>Biaya Daftar Ulang:</div>
                    </div>
                    <div className='text'>
                        Putra Rp 8.600.000,- <br />
                        Putri Rp 8.800.000,- <br />
                        Biaya di atas meliputi Seragam, buku, biaya pengembangan dan kegiatan. <br />
                        Biaya di atas belum termasuk potongan biaya khusus gelombang istimewa.
                    </div>
                    <div className='box'>
                        <div>Potongan Biaya:</div>
                    </div>
                    <div className='text'>
                        1. Potongan periode Agustus - September 2022: s.d Rp. 1.500.00,- <br />
                        2. Potongan periode November - Desember 2022: s.d Rp. 1.000.00,- <br />
                        3. Potongan periode Januari - Februari 2022: s.d Rp. 500.000,- <br />
                        4. Beasiswa Yatim dan Dhuafa Berprestasi
                    </div>
                    <div className='box'>
                        <div>Syarat:</div>
                    </div>
                    <div className='text'>
                        1. Mengisi Formulir <br />
                        2. Membayar Biaya Pendaftaran sebesar Rp. 250.000,- <br />
                        3. Pas Foto 3x4 berseragam sekolah (3 lembar) <br />
                        4. Fotocopy Rapor kelas 4,5 <br />
                        5. Fotocopy Nomor Induk Siswa Nasional (NISN) <br />
                        6. Fotocopy Kartu Keluarga (KK)
                    </div>
                    <div className='box'>
                        <div>PPD 2023/2024</div>
                    </div>
                    <div className='text'>
                        Kuota Putra: 32 <br />
                        Kuota Putri: 31 <br /> <br />
                        1. Mengisi Formulir <br />
                        2. Membayar Biaya Pendaftaran sebesar Rp. 250.000,- <br />
                        3. Pas Foto 3x4 berseragam sekolah (3 lembar) <br />
                        4. Fotocopy Rapor kelas 4,5 <br />
                        5. Fotocopy Nomor Induk Siswa Nasional (NISN) <br />
                        6. Fotocopy Kartu Keluarga (KK)
                    </div>
                </div>
            </div>
            <Link to='/ppdb/status-pendaftaran'>
                <button className='ppdb-button-next'>Lanjut</button>
            </Link>
            <WebFooter />
        </div>
    )
}

export default PPDBPage;
