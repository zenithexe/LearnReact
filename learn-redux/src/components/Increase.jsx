import React from "react";
import { increment } from "../features/count/countSlice";
import { useDispatch } from "react-redux";

function Increase() {
  const dispatch = useDispatch();

  return (
    <>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        Increase
      </button>
    </>
  );
}

export default Increase;
