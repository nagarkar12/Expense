import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Register from "./Components/Pages/Register";
import Login from "./Components/Pages/Login";
import Expense from "./Components/Pages/Expense";
import Navbar from "./Components/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Register />
      <Login />
      <Expense />
    </>
  );
}

export default App;
