import { useCallback, useState } from "react";
import AppStateContext from "../contexts/AppStateContext";
import centerList from "../classdata.json";

const AppStateProvider = ({ children }) => {
  // useState의 초기값으로 콜백을 호출하면, 맨 처음 한 번만 실행한다.
  const [centers, setCenters] = useState(() => {
    return centerList;
  });
  console.log(centers);
  const [center, setCenter] = useState([]);
  const [course, setCourse] = useState([]);
  const [sidebar, setSidebar] = useState(false);
  const [coursebar, setCoursebar] = useState(false);
  const [mode, setMode] = useState("WELCOME");

  const toggleSide = useCallback((bar) => {
    return !bar;
  }, []);

  const deleteCenter = useCallback(
    (key) => {
      setSidebar(toggleSide(sidebar));
      const nextItems = centers.filter((item) => item.key !== key);
      setCenters(nextItems);
    },
    [centers, sidebar]
  );

  const addToCenter = useCallback(
    (key) => {
      if (!sidebar) {
        // addToCenter의 경우엔 false인 경우 밖에 없음
        // sidebar가 false 이면, Sidebar를 true로 바꾼다
        setSidebar(true);
      }
      setCoursebar(false);
      const find = centers.find((c) => c.key === key);
      setCenter(find);
    },
    [center, sidebar, centers]
  );

  return (
    <AppStateContext.Provider
      value={{
        centers,
        center,
        course,
        sidebar,
        mode,
        coursebar,
        deleteCenter,
        toggleSide,
        setCenters,
        setCenter,
        setSidebar,
        addToCenter,
        setCoursebar,
        setCourse,
        setMode,
      }}
    >
      {children}
    </AppStateContext.Provider>
  );
};

export default AppStateProvider;
