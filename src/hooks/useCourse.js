import { useState } from 'react';

export default function useCourse() {
  const [course, setCourse] = useState([]);
  return [course, setCourse];
}
