import { IProducts } from "../../services/request"

export interface IProductListProps {
  list: IProducts[];
  filteredProducts: string;
  handleClick: (idproduct: number | null) => void;
}