import { useState } from 'react';

export default function useCenter() {
  const [center, setCenter] = useState('');
  console.log('center 초기값 없음', center);
  return [center, setCenter];
}
