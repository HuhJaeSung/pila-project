import { useState } from 'react';

export default function useMode() {
  const [mode, setMode] = useState('WELCOME');
  return [mode, setMode];
}
