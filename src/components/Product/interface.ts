import { IProducts } from "../../services/request";

export interface IProductProps {
  prod: IProducts;
  handleClick: (idproduct: number | null) => void;
}
