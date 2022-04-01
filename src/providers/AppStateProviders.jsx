import { useCallback, useState } from "react";
import AppStateContext from "../contexts/AppStateContext";

const AppStateProvider = ({ children }) => {
  const [centers, setCenters] = useState([
    {
      id: "pi-1",
      title: "당근 필라",
      location: "서울시 도봉구",
      hours: "10시 ~ 20시",
      position: {
        lat: 37.27943075229118,
        lon: 127.01763998406159,
      },
      courses: [
        {
          id: "cl-1",
          date: "2022-02-22",
          price: 30000,
          phonenumber: "010XXXXXXXX",
          classtype: ["그룹"],
          taxfree: true,
          desc: "그룹 가능하시고 원하시는 분은 이력서 요청드립니다. 010-XXXX-XXXX",
        },
        {
          id: "cl-2",
          date: "2022-03-23",
          price: 20000,
          phonenumber: "010XXXXXXXX",
          classtype: ["개인"],
          taxfree: true,
          desc: "그룹 가능하시고 원하시는 분은 이력서 요청드립니다. 010-1234-XXXX",
        },
      ],
    },
    {
      id: "pi-2",
      title: "수박 필라",
      location: "서울시 종로구",
      hours: "10시 ~ 20시",
      position: {
        lat: 37.55915668706214,
        lon: 126.92536526611102,
      },
      courses: [
        {
          date: "2022-02-22",
          price: 30000,
          phonenumber: "010XXXXXXXX",
          classtype: ["그룹"],
          taxfree: true,
          desc: "그룹 가능하시고 원하시는 분은 이력서 요청드립니다. 010-XXXX-XXXX",
        },
      ],
    },
    {
      id: "pi-3",
      title: "딸기 필라",
      location: "서울시 종로구",
      hours: "10시 ~ 20시",
      position: {
        lat: 35.13854258261161,
        lon: 129.1014781294671,
      },
      courses: [
        {
          date: "2022-02-22",
          price: 15000,
          phonenumber: "010XXXXXXXX",
          classtype: ["그룹"],
          taxfree: true,
          desc: "그룹 가능하시고 원하시는 분은 이력서 요청드립니다. 010-XXXX-XXXX",
        },
      ],
    },
    {
      id: "pi-4",
      title: "멜론 필라",
      location: "서울시 종로구",
      hours: "10시 ~ 20시",
      position: {
        lat: 37.55518388656961,
        lon: 126.92926237742505,
      },
      courses: [
        {
          date: "2022-02-22",
          price: 20000,
          phonenumber: "010XXXXXXXX",
          classtype: ["그룹"],
          taxfree: true,
          desc: "그룹 가능하시고 원하시는 분은 이력서 요청드립니다. 010-XXXX-XXXX",
        },
      ],
    },
    {
      id: "pi-5",
      title: "유나 필라",
      location: "함경북도 평양",
      hours: "10시 ~ 20시",
      position: {
        lat: 35.93282824693927,
        lon: 126.95307628834287,
      },
      courses: [
        {
          date: "2022-03-23",
          price: 20000,
          phonenumber: "010XXXXXXXX",
          classtype: ["그룹"],
          taxfree: true,
          desc: "그룹 가능하시고 원하시는 분은 이력서 요청드립니다. 010-XXXX-XXXX",
        },
      ],
    },
  ]);
  const [center, setCenter] = useState([]);
  const [sidebar, setSidebar] = useState(false);
  const [coursebar, setCoursebar] = useState(false);
  const toggleSide = useCallback(() => {
    setSidebar(!sidebar);
  }, [sidebar]);

  const toggleCourse = useCallback(() => {
    setCoursebar(!coursebar);
  }, [coursebar]);

  const addToCenter = useCallback(
    (id) => {
      if (!sidebar) {
        toggleSide();
      }
      const find = centers.find((c) => c.id === id);
      setCenter(find);
    },
    [center]
  );

  const addToCourse = useCallback(
    (id) => {
      if (!coursebar) {
        toggleCourse();
      }
      const find = courses.find((c) => c.id === id);
      setCoursebar(find)
    }
  )

  return (
    <AppStateContext.Provider
      value={{
        centers,
        center,
        sidebar,
        addToCenter,
        toggleSide,
      }}
    >
      {children}
    </AppStateContext.Provider>
  );
};

export default AppStateProvider;
