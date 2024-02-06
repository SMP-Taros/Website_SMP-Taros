import React from "react";
import WebBanner from '../components/WebBanner';
import WebCarousel from '../components/WebCarousel';
import WebSambutan from '../components/WebSambutan';
import WebVisi from '../components/WebVisi';
import WebKompetensi from '../components/WebKompetensi';
import WebProgram from '../components/WebProgram';

function ProfilPage(){
  return(
    <div className="profile-page">
      <WebBanner></WebBanner>
      <WebSambutan></WebSambutan>
      <WebVisi></WebVisi>
      <WebKompetensi></WebKompetensi>
      <WebProgram></WebProgram>
      <WebCarousel></WebCarousel>
    </div>
  )
}

export default ProfilPage; 