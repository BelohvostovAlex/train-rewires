import React from "react";
import logo from "./logo.svg";
import "./App.css";
import MyComponents from "@components/MyComponents";
import { ReactComponent as SignIn } from "@assets/sign-in.svg";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <SignIn />
      </header>
      <MyComponents />
    </div>
  );
}

export default App;
