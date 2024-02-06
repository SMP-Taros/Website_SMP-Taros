import React from 'react';
import IStudy from '/image/studyclub.svg';
import ILeader from '/image/leadership.svg';
import IProgram from '/image/program.svg';

function WebProgram() {
    return (
        <div className="program-container">
            <h1 className="program-header">PROGRAM PENDUKUNG</h1>
            <div className='program-pendukung'>
                <div className='program-isi'>
                    <div className='program-isi-box'>
                        <img src={IStudy} className='image' />
                        <div className='text-box'>
                            <div className='title'>Study Club</div>
                            <div className='desc'>Fun English, Arabic, Sejarah Islam dan Indonesia</div>
                        </div>
                    </div>
                </div>
                <div className='program-isi'>
                    <div className='program-isi-box'>
                        <img src={ILeader} className='image' />
                        <div className='text-box'>
                            <div className='title'>Leadership</div>
                            <div className='desc'>OSIS, PMR, BPI</div>
                        </div>
                    </div>
                </div>
                <div className='program-isi'>
                    <div className='program-isi-box'>
                        <img src={IProgram} className='image' />
                        <div className='text-box'>
                            <div className='title'>Program Khusus</div>
                            <div className='desc'>Tahfidzul Qur'an</div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default WebProgram;