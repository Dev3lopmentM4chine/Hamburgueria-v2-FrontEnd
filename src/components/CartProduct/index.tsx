import { StyledCartProduct } from "./style";
import { Button } from "../Button";
import { IProducts } from "../../services/interface";
import { CardContext } from "../../context/cardContext";
import { useContext } from "react";
import { FaTrash } from "react-icons/fa";
import { IoRemoveSharp, IoAddSharp } from "react-icons/io5"

interface ICartProductProps {
  prod: IProducts;
}

export const CartProduct = ({ prod }: ICartProductProps) => {
  const { currentSale, setCurrentSale, handleClick } = useContext(CardContext);

  const deleteProduct = (productId: number) => {
    let newList = currentSale.filter(
      (element: IProducts) => element.id !== productId
    );
    setCurrentSale([...newList]);
  };

  const removeAmount = (prodID: number) => {
    let newCurrentSale = currentSale;

    newCurrentSale.forEach((element) => {
      if (element.id === prodID) {
        if (element.amount > 1) {
          element.amount -= 1;
        }
      }
    });

    setCurrentSale([...newCurrentSale]);
  };

  return (
    <StyledCartProduct>
      <div className="containerInfo">
        <figure>
          <img src={prod.img} alt="Imagem do produto" />
        </figure>

        <div className="productInfo">
          <h3 className="name">{prod.name}</h3>

          <div className="productCounter">
            <button onClick={() => handleClick(prod.id)}> 
              <IoAddSharp/>
            </button>

            <span> {prod.amount} </span>

            <button onClick={() => removeAmount(prod.id)}>
              <IoRemoveSharp/>
            </button>
          </div>
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
