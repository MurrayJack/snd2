import * as React from "react";
import { IHeaderProps, IClosedHeaderprops } from "./index";
import { ClosedHeaderDiv, ClosedHeaderButton } from "./Header.styles";

const ClosedHeader = ({ Caption }: IClosedHeaderprops) => (
  <>
    <ClosedHeaderDiv>
      {Caption}
      <ClosedHeaderButton>{/* <Icon /> */}</ClosedHeaderButton>
    </ClosedHeaderDiv>
  </>
);

export default ({ Mode, Placeholder, ValueDescription }: IHeaderProps) => {
  return (
    <>
      <>
        {Mode === "InSearch" && <div>search</div>}

        {Mode === "HasValue" && <ClosedHeader Caption={ValueDescription} />}

        {Mode === "IsEmpty" && <ClosedHeader Caption={Placeholder} />}
      </>
    </>
  );
};
