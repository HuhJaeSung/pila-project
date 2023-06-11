import { useState } from 'react';
import centerList from '../classdata.json';

export default function useCenters(name) {
  // useState의 초기값으로 콜백을 호출하면, 맨 처음 한 번만 실행한다.
  const [centers, setCenters] = useState(() => {
    return centerList;
  });
  // To Do : 매번 Center List가 여러번 호출되는 이유 알아내기
  console.log(name);
  return [centers, setCenters];
}
