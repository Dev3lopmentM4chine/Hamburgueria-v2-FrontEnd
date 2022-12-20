import { IProducts } from "../../services/interface";

export interface ICartProps {
  currentSale: IProducts[];
  setCurrentSale: (list: IProducts[]) => void;
}
