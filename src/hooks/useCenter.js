import { useState } from 'react';

export default function useCenter() {
  const [center, setCenter] = useState('');
  console.log(center);
  return [center, setCenter];
}
