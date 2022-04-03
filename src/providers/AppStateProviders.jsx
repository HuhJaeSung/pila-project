import { useCallback, useState } from "react";
import AppStateContext from "../contexts/AppStateContext";
import centerList from "../classdata.json";

const AppStateProvider = ({ children }) => {
  const [centers, setCenters] = useState(() => {
    return centerList;
  });
  const [center, setCenter] = useState([]);
  const [sidebar, setSidebar] = useState(false);
  const [mode, setMode] = useState("CREATE");

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
        setSidebar,
        addToCenter,
        setMode,
      }}
    >
      {children}
    </AppStateContext.Provider>
  );
};

export default AppStateProvider;
