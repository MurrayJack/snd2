import * as React from "react";
import Header from "./Children/Header";
import Dropdown from "./Children/Dropdown";

import { ISNDProps, ISNDData, ISNDState } from "./";

export default ({
  Data,
  Value,
  Placeholder,
  OnSearch,
  OnPageDataRequest,
  AskForClearConfirmation = true
}: ISNDProps) => {
  const [data, setData] = React.useState<ISNDState>({
    Data,
    Mode: "HasValue",
    CurrentValue: undefined
  });

  // const handleOnSearch = (search: string) => {
  //   OnSearch(search).then(newPageData => {
  //     setData({ Data: newPageData });
  //   });
  // };

  const handleFolderClick = (item: ISNDData) => {
    // OnPageDataRequest(item).then(newPageData => {
    //   setData({ Data: newPageData });
    // });
  };

  const handleItemClick = (item: ISNDData) => {};

  const handleClearClick = () => {
    setData({
      Data: undefined,
      CurrentValue: undefined,
      Mode: "IsEmpty"
    });
  };

  return (
    <>
      {/* Is Searching */}
      {/* <Header Mode="InSearch" OnSearch={handleOnSearch} /> */}

      {/* Is Empty */}
      {/* <Header
        Mode="IsEmpty"
        Placeholder={Placeholder}
        OnSearch={handleOnSearch}
      /> */}

      {/* Has Value */}
      <Header
        Mode={data.Mode}
        Value={Value}
        Placeholder={Placeholder}
        OnClearClick={handleClearClick}
      />

      {/*  */}

      {/* dropdown */}
      <Dropdown
        Items={data.Data}
        OnFolderClick={handleFolderClick}
        OnItemClick={handleItemClick}
      />
    </>
  );
};
