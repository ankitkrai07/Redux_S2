import React, { useState } from "react";
import { store } from "../redux/store";
import { addAction, reduceAction } from "../redux/action";

const Counter = () => {
  const [forcefulRender, setforcefulRender] = useState(323332);
  console.log(store);
  //   let [count, setCount] = useState(0);

  //   const data = store;

  //   console.log(data);

  const { dispatch, getState, subscribe } = store;
  subscribe(() => {
    console.log("Store Changed...");
    console.log(getState());
    // Tell React what has changed
    // React.Dispatch
    // setforcefulRender((prev) => prev + 1);
    setforcefulRender(getState().counter);
  });

  //   console.log(getState());

  const addHandler = () => {
    // setCount((prev) => prev + 1);
    dispatch(addAction(1));
    // console.log(getState());
  };

  const reduceHandler = () => {
    dispatch(reduceAction(1));
  };

  return (
    <div>
      <h1>Counter: {getState().counter}</h1>
      <button onClick={addHandler}>Add</button>
      <button on onClick={reduceHandler}>
        Reduce
      </button>
    </div>
  );
};

export default Counter;
