import React from "react";
import HeaderHome from "../components/HeaderHome";
import WebProfilHome from "../components/WebProfilHome";
import WebBeritaHome from "../components/WebBeritaHome";
import WebPpdbHome from "../components/WebPpdbHome";
import WebInformasiHome from "../components/WebInformasiHome";
import WebPengumumanHome from "../components/WebPengumumanHome";
import WebTestiHome from "../components/WebTestiHome";
import WebKontakHome from "../components/WebKontakHome";
 
function HomePage(){
  return(
    <div className="homepage">
      <HeaderHome></HeaderHome>
      <WebProfilHome></WebProfilHome>
      <WebBeritaHome></WebBeritaHome>
      <WebPpdbHome></WebPpdbHome>
      <WebInformasiHome></WebInformasiHome>
      <WebPengumumanHome></WebPengumumanHome>
      <WebTestiHome></WebTestiHome>
      <WebKontakHome></WebKontakHome>
    </div>
  )
}

export default HomePage;