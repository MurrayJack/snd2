export interface ISNDData {
  Caption: string;
  Folder?: boolean;
}

export interface ISNDProps {
  Data: ISNDData[];
  Placeholder: string;
  OnSearch: (search: string) => Promise<ISNDData[]>;
  OnChange: (value?: ISNDData) => void;
  OnPageDataRequest: (folder: ISNDData) => Promise<ISNDData[]>;
}

type Mode = "InSearch" | "IsEmpty" | "HasValue";

export interface IClosedHeaderprops {
  Caption: string;
  Icon: any;
  OnButtonClick: () => void;
}

export interface IHeaderProps {
  Mode: Mode;
  Placeholder?: string;
  ValueDescription?: string;
  OnButtonClick: () => void;
  OnSearch: (search: string) => void;
}

export interface IDropdownProps {
  Items: ISNDData[];
}
