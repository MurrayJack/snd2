import * as React from "react";
import { IDropdownProps } from "../";
import { DropdownWrapperDiv } from "./Dropdown.styles";
import FolderItem from "./FolderItem";

export default ({ PageData, OnItemClick }: IDropdownProps) => {
  return (
    <>
      <DropdownWrapperDiv>
        <ul>
          {PageData ? (
            PageData.map(e => (
              <li key={e.Caption}>
                <FolderItem Data={e} OnClick={OnItemClick} />
              </li>
            ))
          ) : (
            <div>No Items</div>
          )}
        </ul>
      </DropdownWrapperDiv>
    </>
  );
};
