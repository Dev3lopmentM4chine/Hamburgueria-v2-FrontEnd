import { StyledProductsList } from "./style";
import { Product } from "../Product";
import { useEffect, useState } from "react";
import { IProducts } from "../../services/request";
import { IProductListProps } from "./interface";

export const ProductsList = ({
  list,
  filteredProducts,
  handleClick,
}: IProductListProps) => {
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
            <Product key={index} prod={element} handleClick={handleClick} />
          ))
        : list.map((element: IProducts, index: number) => (
            <Product key={index} prod={element} handleClick={handleClick} />
          ))}
    </StyledProductsList>
  );
};
