export interface RegestrationProps {
    handleToggle: () => void;
}
export interface UserData {
    identifier:string,
    password:string,
} 
export interface INavItem {
    link:string;
    path:string;
}
export interface IBaner {
    src:string;
    Title:string;
    Description:string;
    Fbtn:string;
    Secbtn?:string;
}
export interface IPackages {
    name:string;
    img?:string;
    monthlyPrice?:number;
    yearlyPrice?:number;
    describtion:string;
    green:string
}

export interface FadeInProps {
    direction: 'up' | 'down' | 'left' | 'right';
    delay: number;
  }
  export interface UserSignUp{
    username: string,
    email: string,
    password: string,
    com_password: string,
    phone:string,
    age:string,
    gender:string,
    city:string,
    country:string,
    Media: File | null;
}
export interface UserState {
    identifier: string;
    password: string;
}