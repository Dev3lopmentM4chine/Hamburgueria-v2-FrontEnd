import { IProducts } from "../../services/request";

export interface IInputSearchProps {
  list?: IProducts[];
  setFilteredProducts: (p?:string) => void;
}
