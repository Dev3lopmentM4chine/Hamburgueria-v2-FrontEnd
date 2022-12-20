import { IProducts } from "../../services/interface";

export interface ICartProductProps {
  prod: IProducts;
  currentSale: IProducts[];
  setCurrentSale: (list: IProducts[]) => void;
}
