type Mode = "InSearch" | "IsEmpty" | "HasValue";

export interface IClosedHeaderprops {
  Caption: string;
}

export interface IHeaderProps {
  Mode: Mode;
  Placeholder?: string;
  ValueDescription?: string;
}
