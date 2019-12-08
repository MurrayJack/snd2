type Mode = "InSearch" | "IsEmpty" | "HasValue";

export interface ISNDData {
  ID: string | number;
  Caption: string;
  Description?: string;
  Folder?: boolean;
}

export interface ISNDProps {
  Data: ISNDData[];
  Placeholder: string;
  Value?: ISNDData;
  AskForClearConfirmation?: boolean;

  OnSearch: (search: string) => Promise<ISNDData[]>;
  OnChange: (value?: ISNDData) => void;
  OnPageDataRequest: (folder: ISNDData) => Promise<ISNDData[]>;
}

export interface ISNDState {
  Data?: ISNDData[];
  CurrentValue?: ISNDData;
  Mode: Mode;
}

export interface IClosedHeaderprops {
  Caption: string;
  Icon: any;
  OnButtonClick: () => void;
}

export interface IHeaderProps {
  Mode: Mode;
  Placeholder?: string;
  Value?: ISNDData;
  //OnButtonClick: () => void;
  OnSearch?: (search: string) => void;
  OnClearClick?: () => void;
}

export interface IDropdownProps {
  Items: ISNDData[];
  OnFolderClick: (item: ISNDData) => void;
  OnItemClick: (item: ISNDData) => void;
}
