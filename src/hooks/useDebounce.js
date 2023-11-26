import { useState, useEffect, useRef } from 'react';

export default function useDebounce(value = '', delay = 1000) {
  const [search, setSearch] = useState(value);
  let timerID = useRef();

  //mount and unmount
  useEffect(() => {
    return () => clearTimeout(timerID);
  }, []);

  useEffect(() => {
    timerID = setTimeout(() => setSearch(value), delay);

    return () => clearTimeout(timerID);
  }, [value]);

  return search;
}
