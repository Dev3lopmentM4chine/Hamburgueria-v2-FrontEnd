import { StyledCart } from "./style.js";
import { CartProduct } from "../CartProduct";
import { CartTotal } from "../CartTotal";

const Cart = ({ list }) => {
  return (
    <StyledCart>
      <ul></ul>
      <CartTotal />
    </StyledCart>
  );
};

export { Cart };
