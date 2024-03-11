import React from 'react'
import IYayasan from '/image/taros.jpeg'
import IJSIT from '/image/jsit.png'
 
function Header() {
  return (
    <div className='header-container'>
        <div className='header-isi'>
            <div className='icon'>
                <img className='gambar' src={IYayasan} />
            </div>
            <div className='text'>
                <div className='atas'>SMP IT TAQIYYA ROSYIDA</div>
                <div className='bawah'>Smart Excellent Become a Winner</div>
            </div>
            <div className='icon'>
                <img className='gambar' src={IJSIT} />
            </div>
        </div>
    </div>
  )
}

export default Header
