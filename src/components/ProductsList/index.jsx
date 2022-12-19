import { StyledProductsList } from "./style.js";
import { Product } from "../Product";
import { useEffect, useState } from "react";

const ProductsList = ({ list, filteredProducts, handleClick }) => {
  const [filterProductList, setFilterProductList] = useState([]);

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
        : list.map((element, index) => (
            <Product key={index} prod={element} handleClick={handleClick} />
          ))}
    </StyledProductsList>
  );
};

export { ProductsList };
