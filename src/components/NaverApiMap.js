import React, { useEffect, useState } from "react";
import { NaverMap, Marker } from "react-naver-maps";
import useCenters from "../hooks/useCenters";
import useActions from "../hooks/useActions";
import "./NaverApiMap.css";
import { Link } from "react-router-dom";

function NaverApiMap() {
  const navermaps = window.naver.maps; // 혹은 withNavermaps hoc을 사용
  const centers = useCenters();
  const { addToCenter } = useActions();
  const [myPosi, setMyPosi] = useState({ lat: 37.3595704, lon: 127.105399 });
  // const [pilaPosi, setPilaPosi] = useState([]);
  // const [posIndex, setPosIndex] = useState();

  // const function handleIndex()

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setMyPosi({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        });
      });
    } else {
      window.alert("현재위치 Error");
    }
  }, []);
  console.log(myPosi);
  return (
    <>
      <NaverMap
        className="map-style"
        id="maps-examples-marker"
        defaultCenter={
          typeof myPosi !== "string"
            ? new navermaps.LatLng(myPosi.lat, myPosi.lon)
            : new navermaps.LatLng(37.3595704, 127.105399)
        }
        defaultZoom={12}
      >
        <Marker
          position={
            typeof myPosi !== "string"
              ? new navermaps.LatLng(myPosi.lat, myPosi.lon)
              : new navermaps.LatLng(37.3595704, 127.105399)
          }
          animation={navermaps.Animation.BOUNCE}
          onClick={() => {
            alert("여기가 현재 위치 입니다.");
          }}
        />
        {centers.map((pos) => {
          const click = () => {
            addToCenter(pos.id);
          };
          return (
            <Marker
              key={pos.id}
              position={
                new navermaps.LatLng(pos.position.lat, pos.position.lon)
              }
              onClick={click}
              />
          );
        })}
      </NaverMap>
    </>
  );
}

export default NaverApiMap;
