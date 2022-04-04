import { useCallback, useState } from "react";
import AppStateContext from "../contexts/AppStateContext";
import centerList from "../classdata.json";

const AppStateProvider = ({ children }) => {
  const [centers, setCenters] = useState(() => {
    return centerList;
  });
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
      const nextItems = centers.filter((itme) => itme.key !== key);
      setCenters(nextItems);
    },
    [centers, sidebar]
  );

  const addToCenter = useCallback(
    (key) => {
      if (!sidebar) {
        setSidebar(toggleSide(sidebar));
      }
      const find = centers.find((c) => c.key === key);
      setCenter(find);
    },
    [center, sidebar, centers]
  );

  const toggleCourse = useCallback(
    (nextCourse) => {
      if (coursebar === false) {
        setCoursebar(true);
        console.log(course, coursebar, "if내부");
      } else if (coursebar === true) {
        if (course === nextCourse) {
          setCoursebar(false);
          console.log(course, coursebar, "else, if 내부");
        }
        console.log(course, coursebar, "else, if 외부");
      }
      setCourse(nextCourse);
      console.log(course, coursebar, "외부");
    },
    [coursebar]
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
        setMode,
        toggleCourse,
      }}
    >
      {children}
    </AppStateContext.Provider>
  );
};

export default AppStateProvider;
