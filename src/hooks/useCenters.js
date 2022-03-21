import { useContext } from "react";
import AppStateContext from "../contexts/AppStateContext";

export default function useCenters() {
  const { centers } = useContext(AppStateContext);
  return centers;
}
