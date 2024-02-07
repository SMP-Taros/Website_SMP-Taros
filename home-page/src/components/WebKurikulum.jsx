import React from "react";
import { Row, Col } from "react-bootstrap";
import Kotak1 from "../assets/img/informasi/rectangle51.png";

function WebKurikulum(){
    return (
        <div className="kurikulum-kompetensi">   
            <div className="kurikulum-kompetensi-container">
                <Row className="penjelasan-kompetensi">
                    <div className="text">
                    Kami menghadirkan kombinasi kurikulum Merdeka dan kekhasan kurikulum Jaringan Sekolah Islam Terpadu (JSIT) di dalam  <br/>
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
                                        1. Hafal 6 Juz Al Qur'an <br/>
                                        2. Lulus dengan predikat nilai <br/>
                                        Memuaskan
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
                                        1. Berwawasan global <br/>
                                        2. Beraqidah yang lurus<br/>
                                        3. Berakhlak mulia<br/>
                                        4. Berjiwa sosial dan mandiri<br/>
                                        5. Memiliki semangat Patriotisme dan Nasionalisme
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
                                        1. Terampil bidang Informasi, <br/>
                                            Komunikasi, dan Teknologi<br/>
                                        2. Memiliki kemampuan <br/>
                                            Leadership dan <br/>
                                        Entrepreneurship<br/>
                                        3. Menguasai Jurnalistik dan<br/>
                                            Public Speaking
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

export default WebKurikulum;