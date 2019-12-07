import * as React from "react";
import { render } from "react-dom";

import Header from "./Components/SND/Children/Header";

import "./styles.css";

function App() {
  return (
    <div className="app">
      {/* Is Searching */}
      <Header Mode="InSearch" />

      {/* Is Empty */}
      <Header Mode="IsEmpty" Placeholder="Please Select" />

      {/* Has Value */}
      <Header Mode="HasValue" ValueDescription="Value" />
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
