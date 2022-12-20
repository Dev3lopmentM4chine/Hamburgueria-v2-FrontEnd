import { IProducts } from "../../services/request";

export interface IMainProps {
  list: [] | IProducts[];
  currentSale: [] | IProducts[];
  setCurrentSale: (list: IProducts[]) => void;
  filteredProducts: string;
  handleClick: (productId: number | null) => void;
}
