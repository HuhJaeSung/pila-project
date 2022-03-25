import { useContext } from "react";
import AppStateContext from "../contexts/AppStateContext";

export default function useActions() {
  const { addToCenter, toggleSide } = useContext(AppStateContext);
  return { addToCenter, toggleSide };
}
