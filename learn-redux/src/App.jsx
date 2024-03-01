import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Decrease from "./components/Decrease.jsx";
import Increase from "./components/Increase.jsx";
import Test from "./components/Test.jsx";
import { useSelector } from "react-redux";


function App() {

  const count = useSelector(state=>state.count)

  return (
    <>
    <p>Count : {count}</p>
    <Increase/>
    <Decrease/>
    </>
  );
}

export default App;
