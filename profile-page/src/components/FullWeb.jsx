import React from "react";
import WebKompetensi from './WebKompetensi';
import WebVisi from './WebVisi';
import WebSambutan from "./WebSambutan";
import WebBanner from "./WebBanner";
import WebFooter from "./WebFooter";
import WebHeader from "./WebHeader";
import WebNavbar from "./WebNavbar";

function FullWeb() {
    return (
        <div className="profile-page">
            <WebHeader></WebHeader>
            <WebNavbar></WebNavbar>
            <WebBanner></WebBanner>
            <WebSambutan></WebSambutan>
            <WebVisi></WebVisi>
            <WebKompetensi></WebKompetensi>
            <WebFooter></WebFooter>
        </div>
    )
}

export default FullWeb;
