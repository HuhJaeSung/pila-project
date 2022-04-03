import { useContext } from "react";
import AppStateContext from "../contexts/AppStateContext";

export default function useCourse() {
  const { course } = useContext(AppStateContext);
  return course;
}
