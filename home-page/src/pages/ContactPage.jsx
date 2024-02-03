import React from "react";
import WebBannerKontak from "../components/WebBannerKontak";
import WebKontak from "../components/WebKontak";

function ContactPage(){
  return (
    <div className="contact-page">
      <WebBannerKontak></WebBannerKontak>
      <WebKontak></WebKontak>
    </div>
  )
}

export default ContactPage;
