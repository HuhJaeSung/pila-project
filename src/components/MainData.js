import React from "react";
import useCenter from "../hooks/useCenter";

function MainData() {
  const center = useCenter();

  if (center.length === 0) {
    return (
      <aside>
        <div className="empty">
          <div className="title">You don't have any find</div>
          <div className="subtitle">
            Click on a Marker to show center describe
          </div>
        </div>
      </aside>
    );
  }

  const { id, title, teacher, desc, floor, price, position } = center;
  return (
    <main>
      <div className="centers">
        <div className="center" key={id}>
          <div className="center__body">
            <div className="center__title"></div>
            {title}
          </div>
          <div className="center__detail">
            <p className="center__teacher">강사 : {teacher}분</p>
            <p className="center__floor">{floor}층</p>
            <p className="center__price"> 가격 : 평균 {price}원 </p>
            <p className="center__desc">{desc}</p>
            <p className="center__position">
              {position.lat} / {position.lon}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default MainData;
