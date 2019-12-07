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
      <HeaderInput type="text" spellCheck autoComplete />
      <SearchIcon />
    </HeaderDiv>
  </>
);

export default ({
  Mode,
  Placeholder,
  ValueDescription,
  OnButtonClick,
  OnSearch
}: IHeaderProps) => {
  return (
    <>
      <>
        {Mode === "InSearch" && <SearchHeader />}

        {Mode === "HasValue" && (
          <ClosedHeader
            OnButtonClick={OnButtonClick}
            Icon={CrossIcon}
            Caption={ValueDescription}
          />
        )}

        {Mode === "IsEmpty" && (
          <ClosedHeader
            OnButtonClick={OnButtonClick}
            Icon={SearchIcon}
            Caption={Placeholder}
          />
        )}
      </>
    </>
  );
};
