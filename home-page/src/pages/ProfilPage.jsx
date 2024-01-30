const ProfilPage = () => {
  return (
    <div className="profilpage">
      {/* Komponen Banner */}
        <div className='banner-container'>
            <div className='banner-warna'>
              <h1>PROFIL SMP IT TAROS</h1>
            </div>
        </div>
      {/* Komponen Banner */}
      {/* Komponen Sambutan */}
        <div className="sambutan-container">
            <div className="sambutan-text">
                <h1>SAMBUTAN KEPALA SEKOLAH</h1>
                <p>Assalamualaikum Warahmatullahi Wabarakatuh</p>
            </div>
            <img src="" />
        </div>
      {/* Komponen Sambutan */}
      {/* Komponen Visi */}
        <div className='visi-background'>
          <div className='visi-container'>
              <h1 className='visi-header'>VISI</h1>
              <p>Mewujudkan Sekolah Menengah Pertama Unggulan yang Berakhlak Mulia, Berwawasan Global, Qur'ani dan berprestasi Tinggi</p>
              <p>SMP IT Taqiyya Rasyida merupakan sekolah di bawah Yayasan Taqiyya Rosyida Kartasura untuk melahirkan generasi yang cerdas, berakhlak mulia, mandiri, berwawasan luas dan mencintai al-qur’an serta mampu mengaktualisasikan nilai-nilai Islam dalam kehidupan sehari - hari.</p>
              <p>Dengan memadukan kurikulum Nasional dan Jaringan Sekolah Islam Terpadu (JSIT), diharapkan mampu menjawab berbagai persoalan pendidikan di era sekarang dan masa depan</p>
          </div>
        </div>
      {/* Komponen Visi */}
      {/* Komponen Kompetensi */}
        <div className="kompetensi-container">
            <h1 className="kompetensi-header">10 STANDAR KOMPETENSI LULUSAN</h1>
            <ul className="kompetensi-list">
                <li >1. Berwawasan global</li>
                <li >6. Terampil bidang Informasi, Komunikasi dan Teknologi</li>
                <li >2. Beraqidah yang lurus</li>
                <li >7. Memiliki kemampuan Leadership dan Enterpreneurship</li>
                <li >3. Berakhlak Mulia</li>
                <li >8. Berjiwa sosial dan mandiri</li>
                <li >4. Hafal Juz Al Quran</li>
                <li >9. Memiliki semangat Patriotisme dan Nasionalisme</li>
                <li >5. Lulus dengan predikat nilai Memuaskan</li>
                <li >10. Menguasai Jurnalistik dan Public Speaking</li>
            </ul>
        </div>
      {/* Komponen Kompetensi */}


    </div>
  )
}

export default ProfilPage;
