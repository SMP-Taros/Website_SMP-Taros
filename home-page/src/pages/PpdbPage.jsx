import React from "react";
import WebBannerPpdb from "../components/WebBannerPpdb";
import WebPPDBButton from "../components/WebPpdbButton";

function PpdbPage() {
  return (
    <div className="ppdb-page"> 
      <WebBannerPpdb></WebBannerPpdb>
      <WebPPDBButton></WebPPDBButton>
      <div className='ppdb-page2'>SELAMAT DATANG</div>
    </div> 
  )
}

export default PpdbPage;