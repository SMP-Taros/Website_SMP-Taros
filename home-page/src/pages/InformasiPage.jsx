import React from "react";
import WebBannerKurikulum from "../components/WebBannerKurikulum";
import WebKurikulum from "../components/WebKurikulum";
import WebPrestasi from "../components/WebPrestasi";
import WebEkskul from "../components/WebEkskul";
import WebAkreditasi from "../components/WebAkreditasi";
import WebSarPras from "../components/WebSarPras";

function InformasiPage(){
  return (
    <div className="info-kurkum">  
      <WebBannerKurikulum></WebBannerKurikulum>   
      <WebKurikulum></WebKurikulum>
      <WebPrestasi></WebPrestasi>
      <WebEkskul></WebEkskul>
      <WebAkreditasi></WebAkreditasi> 
      <WebSarPras></WebSarPras>
    </div>
  )
}

export default InformasiPage;
