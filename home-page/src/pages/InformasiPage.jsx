import React from "react";
import WebBannerKurikulum from "../components/WebBannerKurikulum";
import WebKurikulum from "../components/WebKurikulum";
import WebPrestasi from "../components/WebPrestasi";
import WebEkskul from "../components/WebEkskul";
import WebAkreditasi from "../components/WebAkreditasi";

function InformasiPage(){
  return (
    <div className="info-kurkum">
      <WebBannerKurikulum></WebBannerKurikulum>  
      <WebKurikulum></WebKurikulum>
      <WebPrestasi></WebPrestasi>
      <WebEkskul></WebEkskul>
      <WebAkreditasi></WebAkreditasi>
    </div>
  )
}

export default InformasiPage;
