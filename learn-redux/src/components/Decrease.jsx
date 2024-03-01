import React from "react";
import { decrement } from "../features/count/countSlice";
import { useDispatch } from "react-redux";

function Decrease() {
  const dispatch = useDispatch();
  return (
    <>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        Decrease
      </button>
    </>
  );
}

export default Decrease;
