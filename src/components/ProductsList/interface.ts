import { IProducts } from "../../services/request"

export interface IProductListProps {
  list: [] | IProducts[];
  filteredProducts: [] | IProducts[];
  handleClick: (idproduct: number | null) => void;
}