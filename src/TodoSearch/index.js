import React from 'react';
import { TodoContext } from '../App/useTodos';
import './TodoSearch.css';

function TodoSearch({ setSearchValue, searchValue, loading}) {



  const onSearchValueChange = (event) => {
    console.log(event.target.value)
    setSearchValue(event.target.value);
  }

  return (
    <input 
      className="TodoSearch" 
      placeholder="Cebolla"
      value={searchValue}
      onChange={onSearchValueChange}
      disabled={loading}
    />
   
  );
}

export { TodoSearch };
 