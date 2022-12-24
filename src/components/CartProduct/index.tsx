import { StyledCartProduct } from "./style";
import { Button } from "../Button";
import { IProducts } from "../../services/interface";
import { CardContext } from "../../context/cardContext";
import { useContext } from "react";
import { FaTrash } from "react-icons/fa";

interface ICartProductProps {
  prod: IProducts;
}

export const CartProduct = ({ prod }: ICartProductProps) => {
  const { currentSale, setCurrentSale } = useContext(CardContext);

  const deleteProduct = (productId: number) => {
    let newList = currentSale.filter(
      (element: IProducts) => element.id !== productId
    );
    setCurrentSale(newList);
  };

  return (
    <StyledCartProduct>
      <div className="containerInfo">
        <figure>
          <img src={prod.img} alt="Imagem do produto" />
        </figure>

        <div className="productInfo">
          <h3 className="name">{prod.name}</h3>
          <span className="category">{prod.category}</span>
        </div>
      </div>

      <Button
        type="button"
        onClick={() => deleteProduct(prod.id)}
        styledSize=""
        styledColor="unset"
        styledIcon={true}
      >
        <FaTrash />
      </Button>
    </StyledCartProduct>
  );
};
