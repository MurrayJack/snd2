import * as React from "react";
import { render } from "react-dom";
import SND from "./Components/SND/SND";
import "./styles.css";
import data from "./data";

function App() {
  return (
    <div className="app">
      <SND
        Data={data}
        Value={data[0]}
        OnChange={alert}
        OnPageDataRequest={Promise.resolve(alert)}
        OnSearch={Promise.resolve(alert)}
        Placeholder="Please Select"
      />
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
