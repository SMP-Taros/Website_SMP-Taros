import React from "react";
import WebKompetensi from './WebKompetensi';
import WebVisi from './WebVisi';
import WebSambutan from "./WebSambutan";
import WebBanner from "./WebBanner";

function FullWeb() {
    return (
        <div className="profile-page">
            <WebBanner></WebBanner>
            <WebSambutan></WebSambutan>
            <WebVisi></WebVisi>
            <WebKompetensi></WebKompetensi>
        </div>
    )
}

export default FullWeb;
