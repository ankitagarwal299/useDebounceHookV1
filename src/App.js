import React, { useState, useEffect } from 'react';
import useDebounce from './hooks/useDebounce';
import { fetchUsers } from './utils/utils';

import './style.css';

//https://www.youtube.com/watch?v=gwIkg1acujU&t=540s

export default function App() {
  const [search, setSearch] = useState('');
  const debounceValue = useDebounce(search);

  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    async function getusers() {
      try {
        let list = await fetchUsers(debounceValue);
        console.log('App.js list=>', list);
        setList(list);
      } catch (err) {
        setList([]);
      }
      setLoading(false);
    }

    getusers();
  }, [debounceValue]);

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>

      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {loading && <p>Loading.......</p>}
      {!loading &&
        list?.map((u) => {
          return <p>{u}</p>;
        })}
    </div>
  );
}
