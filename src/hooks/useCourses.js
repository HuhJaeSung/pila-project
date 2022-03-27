import { useContext } from "react";
import AppStateContext from "../contexts/AppStateContext";

export default function useCourses() {
  const { courses } = useContext(AppStateContext);
  return courses;
}
