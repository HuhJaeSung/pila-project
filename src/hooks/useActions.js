import { useContext } from "react";
import AppStateContext from "../contexts/AppStateContext";

export default function useActions() {
  const { addToCenter } = useContext(AppStateContext);
  return { addToCenter };
}
