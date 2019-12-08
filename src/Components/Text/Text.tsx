import * as React from "react";
import { ListCaption, ListDescription } from "./Text.styles";

export default ({ Type, children }) => {
  return (
    <>
      {Type === "List-Caption" && <ListCaption>{children}</ListCaption>}
      {Type === "List-Description" && (
        <ListDescription>{children}</ListDescription>
      )}
    </>
  );
};
