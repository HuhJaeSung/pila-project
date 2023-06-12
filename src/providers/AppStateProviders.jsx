import { createContext, useCallback } from 'react';
import useCenters from '../hooks/useCenters';
import useCenter from '../hooks/useCenter';
import useCourse from '../hooks/useCourse';
import useMode from '../hooks/useMode';
import useSiderbar from '../hooks/useSiderbar';

export const AppStateContext = createContext(null);

const AppStateProvider = ({ children }) => {
  const [centers, setCenters] = useCenters('useCenter 초기값');
  const [center, setCenter] = useCenter();
  const [course, setCourse] = useCourse();
  const [sidebar, coursebar, setSidebar, setCoursebar] = useSiderbar();
  console.log('sidebar :', sidebar);
  const [mode, setMode] = useMode();

  const toggleSide = useCallback((bar) => {
    return !bar;
  }, []);

  // const setSidebar = (func) => {};

  const deleteCenter = useCallback(
    (key) => {
      setSidebar(toggleSide(sidebar));
      const nextItems = centers.filter((item) => item.key !== key);
      setCenters(nextItems);
    },
    [centers, sidebar, setCenters, setSidebar, toggleSide]
  );

  const addToCenter = useCallback(
    (key) => {
      console.log('modified sidebar :', sidebar);
      if (!sidebar) {
        // addToCenter의 경우엔 false인 경우 밖에 없음
        // sidebar가 false 이면, Sidebar를 true로 바꾼다
        console.log('before sidebar :', sidebar);
        setSidebar(true);
        console.log('after set sidebar :', sidebar);
      }
      setCoursebar(false);
      const find = centers.find((c) => c.key === key);
      console.log('find : ', find);
      setCenter(find);
    },
    [sidebar, centers, setCenter, setCoursebar, setSidebar]
  );

  const value = {
    centers,
    center,
    course,
    sidebar,
    mode,
    coursebar,
    deleteCenter,
    toggleSide,
    setCenters,
    setCenter,
    setSidebar,
    addToCenter,
    setCoursebar,
    setCourse,
    setMode,
  };

  return (
    <AppStateContext.Provider value={value}>
      {children}
    </AppStateContext.Provider>
  );
};

export default AppStateProvider;
