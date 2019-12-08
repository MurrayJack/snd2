import * as React from "react";
import { IDropdownProps } from "../";
import { DropdownWrapperDiv } from "./Dropdown.styles";
import FolderItem from "./FolderItem";

export default ({ Items }: IDropdownProps) => {
  return (
    <>
      <DropdownWrapperDiv>
        <ul>
          {Items &&
            Items.map(e => (
              <li key={e.Caption}>
                <FolderItem {...e} />
              </li>
            ))}
        </ul>
      </DropdownWrapperDiv>
    </>
  );
};
