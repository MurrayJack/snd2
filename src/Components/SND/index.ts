type Mode = "InSearch" | "IsEmpty" | "HasValue" | "InFolder";

export interface ISNDData {
  ID: string | number;
  Caption: string;
  Description?: string;
  Folder?: boolean;
}

export interface ISNDProps {
  InitialPageData: ISNDData[];
  Placeholder: string;
  Value?: ISNDData;

  OnSearch: (search: string) => Promise<ISNDData[]>;
  OnChange: (value?: ISNDData) => void;
  OnPageDataRequest: (folder: ISNDData) => Promise<ISNDData[]>;
}

export interface ISNDState {
  CurrentPageData?: ISNDData[];
  CurrentValue?: ISNDData;
  CurrentParent?: ISNDData;
  Mode: Mode;
  DropdownVisibility?: boolean;
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
  ParentFolder?: ISNDData;

  OnSearch: (search: string) => void;
  OnSearchClear: () => void;

  OnEmptyClick: () => void;

  OnValueClick: () => void;
  OnValueClearClick: () => void;

  OnFolderClick: () => void;
  OnFolderClearClick: () => void;
}

export interface IDropdownProps {
  PageData: ISNDData[];
  OnItemClick: (data: ISNDData) => void;
}
