import React, { useEffect, useState } from "react";
import {
  Marker,
  Circle,
  Container as MapDiv,
  NaverMap,
  useNavermaps,
} from "react-naver-maps";
import useCenters from "../hooks/useCenters";
import useActions from "../hooks/useActions";
import "./NaverApiMap.css";
import useCenter from "../hooks/useCenter";

const HOME_PATH = window.HOME_PATH || ".";

function NaverApiMap() {
  // const navermaps = window.naver.maps; // 혹은 withNavermaps hoc을 사용
  // NaverMapAPI v0.1로 업데이트 후 위 내용 아래로 변경
  const navermaps = useNavermaps();

  const centers = useCenters();
  const { addToCenter } = useActions();
  const [myPosi, setMyPosi] = useState({ lat: 37.3595704, lon: 127.105399 });
  const center = useCenter();

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
  return (
    <>
      <MapDiv className='map-style' id='maps-examples-marker'>
        <NaverMap
          defaultCenter={
            myPosi
              ? new navermaps.LatLng(myPosi.lat, myPosi.lon)
              : new navermaps.LatLng(37.3595704, 127.105399)
          }
          defaultZoom={14}
          center={
            center.position
              ? new navermaps.LatLng(center.position.lat, center.position.lon)
              : new navermaps.LatLng(myPosi.lat, myPosi.lon)
          }
        >
          <Marker
            position={
              myPosi
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
              addToCenter(pos.key);
            };
            let cntTitle = pos.title;
            return (
              <Marker
                key={pos.key}
                position={
                  new navermaps.LatLng(pos.position.lat, pos.position.lon)
                }
                onClick={click}
                icon={{
                  // url: HOME_PATH + "/imgaes/pila.png",
                  content:
                    '   <div style="font-weight:bold; padding-bottom:3px; color:white; background-color:purple; font-size:10px; text-align: center">' +
                    cntTitle +
                    '<div style="background-color:purple; width:20px; height:20px; left:150px; top: 150px; padding:4px 4px; background-image: url(https://cdn.iconscout.com/icon/premium/png-256-thumb/government-building-2409867-2022483.png);"> </div>' +
                    "</div>",
                  size: new navermaps.Size(50, 52),
                  // url: HOME_PATH + "images/cluster-marker-1.png",
                  origin: new navermaps.Point(0, 0),
                  anchor: new navermaps.Point(25, 26),
                }}
              />

              // <Circle
              //   key={pos.key}
              //   center={new navermaps.LatLng(pos.position.lat, pos.position.lon)}
              //   radius={100}
              //   fillOpacity={0.5}
              //   fillColor={"#FF0000"}
              //   strokeColor={"red"}
              //   clickable={true}
              //   onClick={click}
              // />
            );
          })}
        </NaverMap>
      </MapDiv>
    </>
  );
}

export default NaverApiMap;
