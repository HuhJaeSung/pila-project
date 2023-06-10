import { useContext, useState } from 'react';
import AppStateContext from '../contexts/AppStateContext';

// export function useCenter() {
//   const [center, setCenter] = useState('');
//   return [center, setCenter];
// }

export default function useCenter() {
  const { center } = useContext(AppStateContext);
  return center;
}
