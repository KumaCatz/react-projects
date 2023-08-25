import { useReducer } from "react";

/** useReducer - Exercise 2
 *
 * Finish the reducer function below so that
 * the resulting function can handle the following
 *
 * 1. Should accept 3 action types
 * - INCREMENT - should increment a specific counter
 * - DECREMENT - should decrement a specific counter
 * - ADDCOUNTER - adds a new counter at the end
 *
 * 2. Also add the necessary onClick handlers to each button
 *
 *
 * Notes:
 * 1. The initial list of counters is available in `initialState`
 *
 *
 */

const initialState = [
  {
    id: 1,
    count: 0
  },
  {
    id: 2,
    count: 1
  }
];

const reducerActions = {
  MINUS_ONE: 'MINUS_ONE',
  PLUS_ONE: 'PLUS_ONE',
  ADD_COUNTER: 'ADD_COUNTER',
}

const reducer = (counters, action) => {
  let newArray = [...counters]
  const objId = counters.findIndex((e) => e.id == action.index)

  switch (action.type) {
    case 'MINUS_ONE': {
      newArray[objId].count--
      break
    }
    case 'PLUS_ONE': {
      newArray[objId].count++
      break
    }
    case 'ADD_COUNTER': {
      const newCounter = {
        id: newArray.length + 1,
        count: newArray.length,
      }
      console.log(newCounter)
      newArray.push(newCounter)
      break
    }
    default:
      return counters;
  }
  return newArray
};

export default function AddCounter() {
  const [counters, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      {counters.map((counter) => (
        <div key={counter.id}>
          <button onClick={() => dispatch({type: reducerActions.MINUS_ONE, index: counter.id, count: counter.count})}>-</button> <span>{counter.count}</span>{" "}
          <button onClick={() => dispatch({type: reducerActions.PLUS_ONE, index: counter.id, count: counter.count})}>+</button>{" "}
        </div>
      ))}
      <br />
      <button onClick={() => dispatch({type: reducerActions.ADD_COUNTER})}>Add a counter</button>
    </>
  );
}
