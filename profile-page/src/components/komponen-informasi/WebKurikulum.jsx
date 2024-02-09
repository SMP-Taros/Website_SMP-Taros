import React from 'react'
import { Row, Col } from "react-bootstrap";
import Kotak1 from "/image/Rectangle51.png";

function WebKurikulum() {
    return (
        <div className="kurikulum-kompetensi">
            <div className="kurikulum-kompetensi-container">
                <Row className="penjelasan-kompetensi">
                    <div className="text">
                        Kami menghadirkan kombinasi kurikulum Merdeka dan kekhasan kurikulum Jaringan Sekolah Islam Terpadu (JSIT) di dalam  <br />
                        lingkungan pembelajaran dengan harapan mampu menunjang dan mengembangkan  nilai-nilai dari 10 Standar <br />
                        Kompetensi Lulusan, yaitu:
                    </div>
                </Row>
                <Row className="kurikulumm">
                    <div className='kompetensi-container'>
                        <div className='box'>
                            <div className="akademike">
                                <div className='kompetensi1'>
                                    <div className="judul">
                                        Akademik dan <br />
                                        Keagamaan
                                    </div>
                                    <div className="kotak-kecil">
                                        <img src={Kotak1} alt="kotakkecil" />
                                    </div>
                                    <div className="text">
                                        <ul className="list-kompetensi">
                                            <li> 1. Hafal 6 Juz Al Qur'an</li>
                                            <li> 2. Lulus dengan predikat nilai <br />
                                                Memuaskan</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="etika">
                                <div className='kompetensi2'>
                                    <div className="judul">
                                        Etika dan <br />
                                        Kepribadian
                                    </div>
                                    <div className="kotak-kecil">
                                        <img src={Kotak1} alt="kotakkecil" />
                                    </div>
                                    <div className="text">
                                        <ul className="list-kompetensi">
                                            <li> 1. Berwawasan global</li>
                                            <li> 2. Beraqidah yang lurus</li>
                                            <li> 3. Berakhlak mulia</li>
                                            <li> 4. Berjiwa sosial dan mandiri</li>
                                            <li> 5. Memiliki semangat Patriotisme dan Nasionalisme</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="ketrampilan">
                                <div className='kompetensi3'>
                                    <div className="judul">
                                        Keterampilan dan  <br />
                                        Kepemimpinan
                                    </div>
                                    <div className="kotak-kecil">
                                        <img src={Kotak1} alt="kotakkecil" />
                                    </div>
                                    <div className="text">
                                        <ul className="list-kompetensi">
                                            <li> 1. Terampil bidang Informasi, <br />
                                                Komunikasi, dan Teknologi </li>
                                            <li> 2. Memiliki kemampuan <br />
                                                Leadership dan <br />
                                                Entrepreneurship</li>
                                            <li> 3. Menguasai Jurnalistik dan</li>
                                            Public Speaking
                                        </ul>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Row>
            </div>
        </div>
    )
}

export default WebKurikulum
