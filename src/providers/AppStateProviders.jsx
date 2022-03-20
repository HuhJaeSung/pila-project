import { useCallback, useState } from "react";
import AppStateContext from "../contexts/AppStateContext";

const AppStateProvider = ({ children }) => {
  const [centers, setCenters] = useState([
    {
      id: "pi-1",
      title: "당근 필라",
      teacher: 7,
      desc: "소도구 중심 필라테스 입니다.",
      floor: 3,
      price: 30000,
      position: {
        lat: 37.27943075229118,
        lon: 127.01763998406159,
      },
    },
    {
      id: "pi-2",
      title: "수박 필라",
      teacher: 5,
      desc: "개인 전문 업체 입니다.",
      floor: 2,
      price: 30000,
      position: {
        lat: 37.55915668706214,
        lon: 126.92536526611102,
      },
    },
    {
      id: "pi-3",
      title: "딸리 필라",
      teacher: 8,
      desc: "단체 전문 업체 입니다.",
      floor: 8,
      price: 15000,
      position: {
        lat: 35.13854258261161,
        lon: 129.1014781294671,
      },
    },
    {
      id: "pi-4",
      title: "멜론 필라",
      teacher: 4,
      desc: "기구 전문 업체입니다.",
      floor: 3,
      price: 20000,
      position: {
        lat: 37.55518388656961,
        lon: 126.92926237742505,
      },
    },
  ]);
  const [center, setCenter] = useState([]);
  const addToCenter = useCallback((id) => {
    setCenter(centers.find((c) => c.id === id));
    return center;
  });
  return (
    <AppStateContext.Provider
      value={{
        centers,
        center,
        addToCenter,
      }}
    >
      {children}
    </AppStateContext.Provider>
  );
};

export default AppStateProvider;
