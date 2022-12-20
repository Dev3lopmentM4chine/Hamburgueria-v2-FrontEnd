import { StyledCart } from "./style";
import { CartProduct } from "../CartProduct";
import { CartTotal } from "../CartTotal";
import { ICartProps } from "./interface";

export const Cart = ({ currentSale, setCurrentSale }: ICartProps) => {
  return (
    <StyledCart>
      <div className="cartTitle">
        <h3>Carrinho de compras</h3>
      </div>
      <ul>
        {currentSale.length > 0 ? (
          currentSale.map((element, index) => (
            <CartProduct
              key={index}
              prod={element}
              currentSale={currentSale}
              setCurrentSale={setCurrentSale}
            />
          ))
        ) : (
          <div className="noItens">
            <h3>Sua sacola está vazia</h3>
            <span>Adicione itens</span>
          </div>
        )}
      </ul>
      {currentSale.length > 0 ? (
        <CartTotal currentSale={currentSale} setCurrentSale={setCurrentSale} />
      ) : (
        null
      )}
    </StyledCart>
  );
};

