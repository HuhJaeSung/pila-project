import { useContext } from "react";
import AppStateContext from "../contexts/AppStateContext";

export default function useMode() {
  const { mode } = useContext(AppStateContext);
  return mode;
}
