import { useContext } from "react";
import { AppStateContext } from "../providers/AppStateProviders";

export default function useActions() {
  return useContext(AppStateContext);

  // 정의할 필요없이 바로 return 하면 된다.
  // const {
  //   addToCenter,
  //   toggleSide,
  //   setMode,
  //   setCenters,
  //   setCenter,
  //   setCourse,
  //   setSidebar,
  //   setCoursebar,
  //   deleteCenter,
  // } = useContext(AppStateContext);
  // return {
  //   addToCenter,
  //   toggleSide,
  //   setMode,
  //   setCenters,
  //   setCenter,
  //   setCourse,
  //   setSidebar,
  //   setCoursebar,
  //   deleteCenter,
  // };
}
