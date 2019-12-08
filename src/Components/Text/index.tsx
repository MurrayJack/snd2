import Text from "./Text";

export type TextType = "List-Caption" | "List-Description";

export interface ITextProps {
  Type: TextType;
  children: string;
}

export { Text };
