export interface MenuItem {
  id: number;
  pid: number;
  title: string;
  to: string;
  children?: Array<MenuItem>;
}

export interface IProps {
  menuData: Array<MenuItem>
}
