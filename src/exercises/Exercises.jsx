import React, { useState } from "react";
import ColorSwitcher from "./ColorSwitcher";
import SearchFilter from "./SearchFilter";
import BigBinary from "./BigBinary";

function Exercises() {
  const [item, setItem] = useState('')
  const [list, setList] = useState([])

  function addTodo() {
    setList([...list, item]) 
  }

  function deleteItem(i) {
    const newArray = list.filter((_, index) => index != i)
    setList(newArray)
  }
  
  return (
    <>
    <div>
      <input type="text" onChange={(e) => setItem(e.target.value)} />
      <button onClick={addTodo}>Add Todo</button>
      <ul>
        {list.map((item, index) => <li key={index}>{item} <button onClick={() => deleteItem(index)}>delete</button></li>)}
      </ul>
    </div>
    <ColorSwitcher />
    <SearchFilter />
    <BigBinary />
    </>
  );
}

export default Exercises