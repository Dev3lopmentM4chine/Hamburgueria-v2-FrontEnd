import { StyledProductsList } from "./style";
import { Product } from "../Product";
import { useEffect, useState, useContext } from "react";
import { IProducts } from "../../services/interface";
import { CardContext } from "../../context/cardContext";

export const ProductsList = () => {
  const {list, filteredProducts, handleClick} = useContext(CardContext)

  const [filterProductList, setFilterProductList] = useState<IProducts[]>(
    [] as IProducts[]
  );

  useEffect(() => {
    setFilterProductList(
      list.filter(
        (prod) =>
          prod.name.toLowerCase().includes(filteredProducts.toLowerCase()) ||
          prod.category.toLowerCase().includes(filteredProducts.toLowerCase())
      )
    );
  }, [filteredProducts]);

  return (
    <StyledProductsList>
      {filteredProducts.length > 0
        ? filterProductList.map((element, index) => (
            <Product key={index} prod={element} />
          ))
        : list.map((element: IProducts, index: number) => (
            <Product key={index} prod={element} />
          ))}
    </StyledProductsList>
  );
};
