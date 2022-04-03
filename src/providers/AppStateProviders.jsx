import { useCallback, useState } from "react";
import AppStateContext from "../contexts/AppStateContext";
import centerList from "../classdata.json";

const AppStateProvider = ({ children }) => {
  const [centers, setCenters] = useState(centerList);
  const [center, setCenter] = useState([]);
  const [course, setCourse] = useState([]);
  const [sidebar, setSidebar] = useState(false);
  const [coursebar, setCoursebar] = useState(false);
  const [mode, setMode] = useState("WELCOME");

  const toggleSide = useCallback(
    (bar) => {
      return !bar;
    },
    []
  );

  const deleteCenter = useCallback(
    (id) => {
      setSidebar(false);
      const nextItems = centers.filter((itme) => itme.id !== id);
      setCenters(nextItems);
    },
    [centers]
  );

  const addToCenter = useCallback(
    (id) => {
      if (!sidebar) {
        setSidebar(true);
      }

      const find = centers.find((c) => c.id === id);
      setCenter(find);
    },
    [centers, sidebar]
  );

  const toggleCourse = useCallback(
    (course) => {
      if (!coursebar) {
        setCoursebar(!coursebar);
      }
      setCourse(course);
    },
    [coursebar]
  )

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
        setCenters,
        setCenter,
        addToCenter,
        toggleSide,
        setMode,
        toggleCourse,
      }}
    >
      {children}
    </AppStateContext.Provider>
  );
};

export default AppStateProvider;
