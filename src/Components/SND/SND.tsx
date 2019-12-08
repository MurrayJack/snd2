import * as React from "react";
import Header from "./Children/Header";
import Dropdown from "./Children/Dropdown";
import { Manager, Reference, Popper } from "react-popper";
import { ISNDProps, ISNDData, ISNDState } from "./";
import { SNDWrapper } from "./SND.styles";

export default ({
  InitialPageData,
  Value,
  Placeholder,
  OnSearch,
  OnChange,
  OnPageDataRequest
}: ISNDProps) => {
  const [state, setState] = React.useState<ISNDState>({
    Mode: "IsEmpty",
    CurrentPageData: InitialPageData,
    CurrentValue: Value
  });

  const handleSearch = (search: string) => {
    OnSearch(search).then(newPageData => {
      setState({ ...state, CurrentPageData: newPageData });
    });
  };

  const handleSearchClear = () => {
    setState({ ...state, DropdownVisibility: false, Mode: "IsEmpty" });
  };

  const handleValueClearClick = () => {
    setState({
      ...state,
      CurrentPageData: InitialPageData,
      CurrentValue: undefined,
      Mode: "IsEmpty",
      DropdownVisibility: false
    });

    OnChange(undefined);
  };

  const handleItemClick = (data: ISNDData) => {
    if (data.Folder) {
      OnPageDataRequest(data).then(newPageData => {
        setState({
          ...state,
          CurrentParent: data,
          CurrentPageData: newPageData,
          Mode: "InFolder"
        });
      });
    } else {
      setState({
        ...state,
        Mode: "HasValue",
        CurrentValue: data,
        DropdownVisibility: false
      });

      OnChange(data);
    }
  };

  const handleEmptyClick = () => {
    /*
      Clicking on an empty control should
      1) show the dropdown
      2) ask for any data
      3) go into search mode 
    */
    setState({
      ...state,
      Mode: "InSearch",
      DropdownVisibility: true
    });
  };

  return (
    <>
      <SNDWrapper>
        <Manager>
          <Reference>
            {({ ref }) => (
              <div ref={ref}>
                <Header
                  Mode={state.Mode}
                  Value={state.CurrentValue}
                  Placeholder={Placeholder}
                  CurrentParent={state.CurrentParent}
                  OnEmptyClick={handleEmptyClick}
                  OnSearch={handleSearch}
                  OnSearchClear={handleSearchClear}
                  OnValueClearClick={handleValueClearClick}
                />
              </div>
            )}
          </Reference>
          <Popper placement="bottom-start">
            {({ ref, style }) => (
              <div ref={ref} style={{ ...style, width: "auto" }}>
                {state.DropdownVisibility && (
                  <Dropdown
                    PageData={state.CurrentPageData}
                    OnItemClick={handleItemClick}
                  />
                )}
              </div>
            )}
          </Popper>
        </Manager>
      </SNDWrapper>
    </>
  );
};
