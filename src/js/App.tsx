import { useEffect, useState } from "react";
import { getAllProducts } from "../services/request.js";
import { Header } from "../components/Header";
import { Main } from "../components/Main";
import { toast } from "react-toastify";
import { IProducts } from "../services/request.js";

export const App = () => {
  const [list, setList] = useState<IProducts[]>([] as IProducts[]);
  const [filteredProducts, setFilteredProducts] = useState("");
  const [currentSale, setCurrentSale] = useState<IProducts[]>([] as IProducts[]);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    // const token = JSON.parse(localStorage.getItem("@TOKEN")) || null

    getAllProducts(setList);
  }, [filteredProducts]);

  const handleClick = (productId: number | null) => {
    const productSale = list.filter((element) => {
      return element.id === productId;
    });

    
    if (currentSale.length > 0) {
      let verify = true

      currentSale.forEach(element => {
        if(element.id === productId){
          toast.error("Produto já esta no carrinho!")
          verify = false
        }
      })

      if (verify){
        setCurrentSale([...currentSale, productSale[0]]);
      }
    } else {
      setCurrentSale([...productSale]);
    }
  };

  return (
    <>
      <Header setFilteredProducts={setFilteredProducts}/>
      <Main 
      list={list} 
      handleClick={handleClick}
      currentSale={currentSale}
      setCurrentSale={setCurrentSale}
      filteredProducts={filteredProducts}
       />
    </>
  );
};
