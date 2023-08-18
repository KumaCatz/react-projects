import { useState, useReducer } from "react";

const initialState = [];

/**
 *
 * useReducer - Exercise 1
 * 1. Complete the reducer function below to accept
 * two action types
 * - ADD: Adds the value of the input field to the list
 * - RESET: Removes all the entries in the list
 *
 * 2. Add necessary onClick handlers to the buttons
 *
 */

const reducerActions = {
  ADD_ITEM: 'ADD_ITEM',
  RESET_LIST: 'RESET_LIST',
}

function init(initialState) {
  return []
}

const reducer = (items, action) => {
  switch (action.type) {
    case 'ADD_ITEM': {
      return [...items, action.item]
    }
    case 'RESET_LIST': {
      return init(action.payload)
    }
    default:
      return items;
  }
};

export default function BigBinary() {
  const [items, dispatch] = useReducer(reducer, initialState, init);
  const [v, setV] = useState("BigBinary");


  return (
    <>
      <div>
        <input value={v} onChange={(e) => setV(e.target.value)} />{" "}
        <button onClick={() => dispatch({type: reducerActions.ADD_ITEM, item: v})}>Add</button> <button onClick={() => dispatch({type: reducerActions.RESET_LIST, payload: initialState})}>Reset</button>
      </div>
      <ul>
        {items.map((item, ix) => (
          <li key={ix}>{item}</li>
        ))}
      </ul>
    </>
  );
}
