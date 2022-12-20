import { StyledMain } from "./style";
import { ProductsList } from "../ProductsList/index";
import { Cart } from "../Cart";
import { IMainProps } from "./interface";

export const Main = ({
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

