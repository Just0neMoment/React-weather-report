import React from "react";

import { IoReload } from "react-icons/io5";

import "./loading.modules.css"

function Loading() {
  return (
    <div className="modal-bg">
      <div className="modal-ct">
        <h2 className="loading">Loading...</h2>
        <IoReload className="load-icon" />
        <p>사용자가 선택한 위치를 기반으로 날씨 상태를 불러오는 중입니다.</p>
        <p>위치 정보를 불러오는 즉시 본 창은 자동으로 닫힙니다.</p>
      </div>
    </div>
  );
}

export default Loading;