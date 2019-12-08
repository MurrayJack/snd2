import * as React from "react";
import { IHeaderProps, IClosedHeaderprops } from "../";
import { HeaderDiv, HeaderButton, HeaderInput } from "./Header.styles";

import SearchIcon from "../../Icons/SearchIcon";
import CrossIcon from "../../Icons/CrossIcon";

const ClosedHeader = ({ Caption, Icon, OnButtonClick }: IClosedHeaderprops) => (
  <>
    <HeaderDiv>
      {Caption}
      <HeaderButton onClick={OnButtonClick}>{<Icon />}</HeaderButton>
    </HeaderDiv>
  </>
);

const SearchHeader = () => (
  <>
    <HeaderDiv>
      <HeaderInput type="text" spellCheck />
      <SearchIcon />
    </HeaderDiv>
  </>
);

export default ({
  Mode,
  Placeholder,
  Value,
  OnSearch,
  OnClearClick
}: IHeaderProps) => {
  return (
    <>
      <>
        {Mode === "InSearch" && <SearchHeader />}

        {Mode === "HasValue" && (
          <ClosedHeader
            OnButtonClick={OnClearClick}
            Icon={CrossIcon}
            Caption={Value ? Value.Caption : ""}
          />
        )}

        {Mode === "IsEmpty" && (
          <ClosedHeader
            //OnButtonClick={OnButtonClick}
            Icon={SearchIcon}
            Caption={Placeholder}
          />
        )}
      </>
    </>
  );
};
