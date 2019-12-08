import * as React from "react";
import { IHeaderProps } from "../";
import {
  HeaderDiv,
  HeaderButton,
  HeaderInput,
  SearchHeaderWrapper,
  FolderHeaderWrapper
} from "./Header.styles";

import SearchIcon from "../../Icons/SearchIcon";
import CrossIcon from "../../Icons/CrossIcon";

const EmptyHeader = ({ OnEmptyClick, Placeholder }: IHeaderProps) => (
  <>
    <HeaderDiv onClick={OnEmptyClick}>
      {Placeholder}
      <SearchIcon />
    </HeaderDiv>
  </>
);

const ValueHeader = ({ Value, OnValueClearClick }: IHeaderProps) => (
  <>
    <HeaderDiv>
      {Value.Caption}
      <HeaderButton onClick={OnValueClearClick}>X</HeaderButton>
    </HeaderDiv>
  </>
);

const FolderHeader = ({ ParentFolder, OnFolderClearClick }: IHeaderProps) => (
  <>
    <FolderHeaderWrapper>
      <HeaderButton> &lt; </HeaderButton>
      {JSON.stringify(ParentFolder)}
      <HeaderButton onClick={OnFolderClearClick}>X</HeaderButton>
    </FolderHeaderWrapper>
  </>
);

const SearchHeader = ({ OnSearch, OnSearchClear }: IHeaderProps) => {
  const inputControl = React.createRef<HTMLInputElement>();

  const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // set a on seach timout
    // listen to the enter key
    let timeoutVal: number;
    const value = e.target.value;

    if (e.keyCode === 13) {
      window.clearTimeout(timeoutVal);
      OnSearch(value);
    } else {
      if (value && value.length >= 3) {
        timeoutVal = window.setTimeout(() => {
          window.clearTimeout(timeoutVal);
          OnSearch(value);
        }, 500);
      }
    }
  };

  React.useEffect(() => {
    inputControl.current.focus();
  }, [inputControl]);

  const handleClearSearch = () => {
    OnSearchClear();

    inputControl.current.value = "";
    inputControl.current.focus();
  };

  return (
    <>
      <SearchHeaderWrapper>
        <HeaderInput
          onChange={handleKeyUp}
          ref={inputControl}
          type="text"
          spellCheck
          placeholder="What to you want to search?"
        />
        <button onClick={handleClearSearch}>X</button>
        <button>
          <SearchIcon />
        </button>
      </SearchHeaderWrapper>
    </>
  );
};

export default (props: IHeaderProps) => {
  return (
    <>
      {props.Mode === "InSearch" && <SearchHeader {...props} />}

      {props.Mode === "HasValue" && <ValueHeader {...props} />}

      {props.Mode === "IsEmpty" && <EmptyHeader {...props} />}

      {props.Mode === "InFolder" && <FolderHeader {...props} />}
    </>
  );
};
