import { useContext } from "react";
import AppStateContext from "../contexts/AppStateContext";

export default function useActions() {
  const {
    addToCenter,
    toggleSide,
    setMode,
    setCenters,
    setCenter,
    deleteCenter,
    toggleCourse
  } = useContext(AppStateContext);
  return {
    addToCenter,
    toggleSide,
    setMode,
    setCenters,
    setCenter,
    deleteCenter,
    toggleCourse
  };
}
