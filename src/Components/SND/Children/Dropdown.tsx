import * as React from "react";
import { IDropdownProps } from "../";
import { DropdownWrapperDiv } from "./Dropdown.styles";
import Item from "./Item";

export default ({ Items }: IDropdownProps) => {
  return (
    <>
      <DropdownWrapperDiv>
        <ul>
          {Items.map(e => (
            <li>{e.Folder ? <Item {...e} /> : <div>asd</div>}</li>
          ))}
        </ul>
      </DropdownWrapperDiv>
    </>
  );
};
