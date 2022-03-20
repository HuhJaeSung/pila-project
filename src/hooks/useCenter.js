import { useContext } from "react";
import AppStateContext from "../contexts/AppStateContext";

export default function useCenter() {
  const { center } = useContext(AppStateContext);
  return center;
}
