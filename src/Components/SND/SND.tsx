import * as React from "react";
import Header from "./Children/Header";
import Dropdown from "./Children/Dropdown";

import { ISNDProps } from "./";

export default ({ Data }: ISNDProps) => {
  const handleOnSearch = () => false;

  return (
    <>
      {/* Is Searching */}
      <Header
        Mode="InSearch"
        OnButtonClick={handleOnSearch}
        OnSearch={handleOnSearch}
      />

      {/* Is Empty */}
      <Header
        Mode="IsEmpty"
        Placeholder="Please Select"
        OnButtonClick={handleOnSearch}
        OnSearch={handleOnSearch}
      />

      {/* Has Value */}
      <Header
        Mode="HasValue"
        ValueDescription="Value"
        OnButtonClick={handleOnSearch}
        OnSearch={handleOnSearch}
      />

      {/*  */}
      <Dropdown Items={Data} />
    </>
  );
};
