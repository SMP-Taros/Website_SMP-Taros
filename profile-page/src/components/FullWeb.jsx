import React from "react";
import WebKompetensi from './WebKompetensi';
import WebVisi from './WebVisi';
import WebSambutan from "./WebSambutan";

function FullWeb() {
    return (
        <div className="profile-page">
            <WebSambutan></WebSambutan>
            <WebVisi></WebVisi>
            <WebKompetensi></WebKompetensi>
        </div>
    )
}

export default FullWeb;
