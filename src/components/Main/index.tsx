import { StyledMain } from "./style";
import { ProductsList } from "../ProductsList/index";
import { Cart } from "../Cart";

export const Main = () => {
  return (
    <StyledMain>
      <ProductsList />
      {/* <Cart /> */}
    </StyledMain>
  );
};
