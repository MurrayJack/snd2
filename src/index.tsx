import * as React from "react";
import { render } from "react-dom";
import SND from "./Components/SND/SND";
import "./styles.css";
import data from "./data";
import { ISNDData } from "./Components/SND";

const handleSearchRespose = (search: string): Promise<ISNDData[]> => {
  return new Promise(resolve => {
    resolve(data as ISNDData[]);
  });
};

const handlePageRequest = (): Promise<ISNDData[]> => {
  return new Promise(resolve => {
    resolve(data as ISNDData[]);
  });
};

function App() {
  return (
    <div className="app">
      <SND
        Placeholder="Please Select"
        InitialPageData={data as ISNDData[]}
        OnChange={() => console.log("Change")}
        OnSearch={handleSearchRespose}
        OnPageDataRequest={handlePageRequest}
      />
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
