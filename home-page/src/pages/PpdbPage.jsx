import React from "react";
import WebBannerPpdb from "../components/WebBannerPpdb";
import WebPpdbButton from "../components/WebPpdbButton";

function PpdbPage() {
  return (
    <div className="ppdb-page">
      <WebBannerPpdb></WebBannerPpdb>
      <WebPpdbButton></WebPpdbButton>
    </div>
  )
}

export default PpdbPage;