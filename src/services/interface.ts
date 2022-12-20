export interface IProducts {
  id: number;
  name: string;
  category: string;
  price: number;
  img: string;
}

export interface Ilogin {
  email: string;
  password: number | string;
}

export interface Iregister {
  name: string;
  email: string;
  password: number | string;
}

export interface IgetAllProductsProps {
  setList: (data: IProducts[]) => void;
  token?: string;
}
