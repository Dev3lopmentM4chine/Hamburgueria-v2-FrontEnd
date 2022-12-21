import { StyledCartProduct } from "./style";
import { Button } from "../Button";
import { IProducts } from "../../services/interface";
import { ICartProductProps } from "./interface";
import { CardContext } from "../../context/cardContext";
import { useContext } from "react"

export const CartProduct = ({
  prod
}: ICartProductProps) => {
  const {currentSale, setCurrentSale} = useContext(CardContext)

  const deleteProduct = (productId: number) => {
    let newList = currentSale.filter(
      (element: IProducts) => element.id !== productId
    );
    setCurrentSale(newList);
  };

  return (
    <StyledCartProduct>
      <figure>
        <img src={prod.img} alt="Imagem do produto" />
      </figure>

      <div className="productInfo">
        <h3 className="name">{prod.name}</h3>
        <span className="category">{prod.category}</span>
      </div>
      <Button
        children={"Remover"}
        type="button"
        onClick={() => deleteProduct(prod.id)}
      />
    </StyledCartProduct>
  );
};
