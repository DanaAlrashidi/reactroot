import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import PagesLinks from "./component/PagesLinks";

function App() {
  return (
    <div className="App">
      <PagesLinks />
      <h1>Main Page</h1>
    </div>
  );
}

export default App;
