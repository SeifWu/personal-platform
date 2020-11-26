export interface MenuItem {
  id: number;
  pid: number;
  title: string;
  to: string;
  children?: Array<MenuItem>;
}

export interface TopMenuProps {
  title: String;
  menuData: Array<MenuItem>
}
