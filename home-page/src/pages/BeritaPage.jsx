import React from "react";
import WebListBerita from "../components/WebListBerita";

function BeritaPage(){
  return (
    <div className="news-page"> 
        <div className='berita-atap'>
          <div className='text-atap'>BERITA</div>
        </div>
        <WebListBerita />  
    </div>
  ) 
}

export default BeritaPage;
