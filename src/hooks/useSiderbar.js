import { useContext } from "react";
import AppStateContext from "../contexts/AppStateContext";

export default function useSiderbar() {
  const { sidebar, coursebar } = useContext(AppStateContext);
  return {sidebar, coursebar};
}
