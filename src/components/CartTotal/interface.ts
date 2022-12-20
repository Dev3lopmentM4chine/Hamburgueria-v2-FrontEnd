import { IProducts } from "../../services/interface";

export interface ICartTotalProps {
  currentSale: IProducts[];
  setCurrentSale: (list: IProducts[]) => void;
}
