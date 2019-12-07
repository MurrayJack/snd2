import * as React from "react";
import { render } from "react-dom";
import SND from "./Components/SND/SND";
import "./styles.css";
import data from "./data";

function App() {
  return (
    <div className="app">
      <SND Data={data} />
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
