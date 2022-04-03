import { useCallback, useState } from "react";
import AppStateContext from "../contexts/AppStateContext";
import centerList from "../classdata.json";

const AppStateProvider = ({ children }) => {
  const [centers, setCenters] = useState(centerList);
  const [center, setCenter] = useState([]);
  const [sidebar, setSidebar] = useState(false);
  const [mode, setMode] = useState("WELCOME");

  const toggleSide = useCallback((bar) => {
    return !bar;
  }, []);

  const deleteCenter = useCallback(
    (id) => {
      setSidebar(toggleSide(sidebar));
      const nextItems = centers.filter((itme) => itme.id !== id);
      setCenters(nextItems);
    },
    [centers, sidebar]
  );

  const addToCenter = useCallback(
    (id) => {
      if (!sidebar) {
        setSidebar(toggleSide(sidebar));
      }
      const find = centers.find((c) => c.id === id);
      setCenter(find);
    },
    [center, sidebar]
  );

  return (
    <AppStateContext.Provider
      value={{
        centers,
        center,
        sidebar,
        mode,
        deleteCenter,
        toggleSide,
        setCenters,
        setCenter,
        addToCenter,
        setMode,
      }}
    >
      {children}
    </AppStateContext.Provider>
  );
};

export default AppStateProvider;
