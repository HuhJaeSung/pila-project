import { useContext } from "react";
import AppStateContext from "../contexts/AppStateContext";

export default function useSiderbar() {
  const { sidebar } = useContext(AppStateContext);
  return sidebar;
}
