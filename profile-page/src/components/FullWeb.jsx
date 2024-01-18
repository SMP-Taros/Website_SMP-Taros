import React from "react";
import WebKompetensi from './WebKompetensi';
import WebVisi from './WebVisi';

function FullWeb() {
    return (
        <div className="profile-page">
            <WebVisi></WebVisi>
            <WebKompetensi></WebKompetensi>
        </div>
    )
}

export default FullWeb;
