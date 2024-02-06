import React from "react";
import WebBannerKurikulum from "../components/WebBannerKurikulum";
import WebKurikulum from "../components/WebKurikulum";

function InformasiPage(){
  return (
    <div className="info-kurkum">
      <WebBannerKurikulum></WebBannerKurikulum>  
      <WebKurikulum></WebKurikulum>
    </div>
  )
}

export default InformasiPage;
