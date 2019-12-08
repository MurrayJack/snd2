import * as React from "react";
import DocumentIcon from "../../Icons/DocumentIcon";
import FolderIcon from "../../Icons/FolderIcon";
import { ISNDData } from "../";
import { Row, IconWrapperDiv, TextWrapperDiv } from "./FolderItem.styles";
import { Text } from "../../Text";

export default ({ Description, Folder, Caption }: ISNDData) => {
  return (
    <>
      <Row tabIndex={0} IsFolder={Folder} HasDescription={Description}>
        <IconWrapperDiv>
          {Folder ? <FolderIcon /> : <DocumentIcon />}
        </IconWrapperDiv>
        <TextWrapperDiv>
          <Text Type="List-Caption">{Caption}</Text>
          {Description && <Text Type="List-Description">{Description}</Text>}
        </TextWrapperDiv>
        {Folder && <IconWrapperDiv>&gt;</IconWrapperDiv>}
      </Row>
    </>
  );
};
