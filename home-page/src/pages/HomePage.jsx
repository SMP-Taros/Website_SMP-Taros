import React from "react";
import HeaderHome from "../components/HeaderHome";
import WebProfilHome from "../components/WebProfilHome";
import WebBeritaHome from "../components/WebBeritaHome";
import WebPpdbHome from "../components/WebPpdbHome"; 
import WebListPengumumanHome from "../components/WebListPengumumanHome";
import WebTestiHome from "../components/WebTestiHome";
 
function HomePage(){
  return(  
    <div className="homepage">
      <HeaderHome></HeaderHome> 
      <WebProfilHome></WebProfilHome>
      <WebBeritaHome></WebBeritaHome>
      <WebPpdbHome></WebPpdbHome>
      <WebListPengumumanHome></WebListPengumumanHome>
      <WebTestiHome></WebTestiHome>
    </div>
  )
}

export default HomePage;