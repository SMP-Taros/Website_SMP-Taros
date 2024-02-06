import React from "react";
import WebBannerButton from "../components/WebBannerButton";
import WebPPDBButton from "../components/WebPpdbButton";

function PpdbPendaftaran(){
    return(
        <div >  
        <WebBannerButton></WebBannerButton>
        <WebPPDBButton></WebPPDBButton>
        <div className='ppdbpage-informasi'>Informasi Pendaftaran</div>
    </div>
    ) 
}

export default PpdbPendaftaran;