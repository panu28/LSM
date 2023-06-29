export interface sideNavItem{
  title: string,
  link: string
}

export enum UserType{
  ADMIN,
  USER
}

export interface User{
  id: number;
  firstName: string;
  lastNane: string;
  email: string;
  mobile: string;
  password: string;
  blocked: boolean;
  status: boolean;
  createdOn: string;
  fine: Number;
  userType: UserType;
}
