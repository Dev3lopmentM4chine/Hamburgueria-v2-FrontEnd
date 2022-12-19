import { StyledMain } from "./style";
import { ProductsList } from "../ProductsList/index.jsx";
import { Cart } from "../Cart";
import { IProducts } from "../../services/request";

interface IMainProps{
  list: [] | IProducts[],
  currentSale: [] | IProducts[],
  setCurrentSale: (list: IProducts[]) => void,
  filteredProducts: [] | IProducts[],
  handleClick: (productId: number | null) => void,
}

const Main = ({
  list,
  currentSale,
  setCurrentSale,
  filteredProducts,
  handleClick,
}: IMainProps) => {
  return (
    <StyledMain>
      <ProductsList
        list={list}
        filteredProducts={filteredProducts}
        handleClick={handleClick}
      />
      <Cart currentSale={currentSale} setCurrentSale={setCurrentSale} />
    </StyledMain>
  );
};

export { Main };
