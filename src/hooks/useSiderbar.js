import { useState } from 'react';

export default function useSiderbar() {
  const [sidebar, setSidebar] = useState(false);
  const [coursebar, setCoursebar] = useState(false);

  return [sidebar, coursebar, setSidebar, setCoursebar];
}
