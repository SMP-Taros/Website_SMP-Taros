import React from 'react'
import Seni from '/image/informasi-ekskul/seni-keterampilan.png';
import Futsal from '/image/informasi-ekskul/futsal.png'
import Karya from '/image/informasi-ekskul/karya-ilmiah.png'
import MTQ from '/image/informasi-ekskul/mtq.png'
import Pramuka from '/image/informasi-ekskul/pramuka.png'
import Komunikasi from '/image/informasi-ekskul/komunikasi.png'

function WebEkskul() {
    return (
        <div className='ekskulz'>
            <div className='ekskul-container'>
                <div className='title'>EKSTRAKURIKULER</div>
                <div className='box'>
                    <div className='box-1'>
                        <img src={Seni} />
                        <div className='text'>
                            <div className='title-text'>Seni dan Keterampilan</div>
                        </div>
                    </div>
                    <div className='box-2'>
                        <div className='box-2a'>
                            <img src={MTQ} />
                            <div className='text'>
                                <div className='title-text'>MTQ</div>
                            </div>
                        </div>
                        <div className='box-2b'>
                            <img src={Futsal} />
                            <div className='text'>
                                <div className='title-text'>Futsal</div>
                            </div>
                        </div>
                        <div className='box-2a'>
                            <img src={Karya} />
                            <div className='text'>
                                <div className='title-text'>Karya Ilmiah Remaja</div>
                            </div>
                        </div>
                    </div>
                    <div className='box-3'>
                        <div className='box-3a'>
                            <img src={Komunikasi} />
                            <div className='text'>
                                <div className='title-text'>Komunikasi</div>
                            </div>
                        </div>
                        <div className='box-3a'>
                            <img src={Pramuka} />
                            <div className='text'>
                                <div className='title-text'>Pramuka SIT</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='desc'>* Gambar hanya ilustrasi</div>
            </div>
        </div>

    )
}

export default WebEkskul
