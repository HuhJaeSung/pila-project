import { useCallback, useState } from "react";
import AppStateContext from "../contexts/AppStateContext";
import centerList from "../classdata.json";

const AppStateProvider = ({ children }) => {
  const [centers, setCenters] = useState(centerList);
  const [center, setCenter] = useState([]);
  const [sidebar, setSidebar] = useState(false);
  const [mode, setMode] = useState("WELCOME");

  const toggleSide = useCallback(
    (bar) => {
      return !bar;
    },
    [sidebar]
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
    [center]
  );

  return (
    <AppStateContext.Provider
      value={{
        centers,
        center,
        sidebar,
        mode,
        deleteCenter,
        setCenters,
        setCenter,
        addToCenter,
        toggleSide,
        setMode,
      }}
    >
      {children}
    </AppStateContext.Provider>
  );
};

export default AppStateProvider;
