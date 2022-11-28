import { useEffect, useState } from "react";
import { getAllProducts } from "../services/request.js";
import { Header } from "../components/Header";
import { Main } from "../components/Main";

export const App = () => {
  const [list, setList] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    getAllProducts(setList);
    console.log(currentSale)
  }, [currentSale]);

  const handleClick = (productId) => {
    const productSale = list.filter((element) => {
      return element.id === productId;
    });

    if (currentSale.length > 0) {
      setCurrentSale([...currentSale, productSale[0]]);
    } else {
      setCurrentSale([...productSale]);
    }
  };

  return (
    <>
      <Header />
      <Main 
      list={list} 
      handleClick={handleClick}
      currentSale={currentSale}
      setCurrentSale={setCurrentSale}
      
       />
    </>
  );
};
