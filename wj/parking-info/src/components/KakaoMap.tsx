"use client";

import { Map } from "react-kakao-maps-sdk";

export default function KakaoMap() {
  return <Map center={{ lat: 37.5665, lng: 126.978 }} style={{ width: "100%", height: "100%" }} level={3}></Map>;
}
