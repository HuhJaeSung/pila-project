import React from "react";
import { RenderAfterNavermapsLoaded, NaverMap } from "react-naver-maps";

export const NaverAPIMap = (props) => {
  return (
    <RenderAfterNavermapsLoaded ncpClientId={"9gnpxruwbr"}>
      <NaverMap
        id={"map"}
        mapDivId={"react-naver-map"} // default name
        style={{
          width: "100%", // 네이버지도 가로 길이 "git TEST"
          height: "85vh", // 네이버지도 세로 길이
        }}
        defaultCenter={{ lat: 37.554722, lng: 126.970833 }}
        defaultZoom={10}
      />
    </RenderAfterNavermapsLoaded>
  );
};

export default NaverAPIMap;
