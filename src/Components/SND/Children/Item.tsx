import * as React from "react";
import DocumentIcon from "../../Icons/DocumentIcon";
import { ISNDData } from "../";
export default ({ Caption }: ISNDData) => (
  <>
    <div>
      <DocumentIcon />
      <span>{Caption}</span>
    </div>
  </>
);
