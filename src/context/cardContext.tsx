import { createContext, useEffect, useState, useContext } from "react";
import { toast } from "react-toastify";
import { IProducts } from "../services/interface";
import { UserContext } from "./userContext";


interface ICardContextProps {
  list: [] | IProducts[],
  setList: React.Dispatch<React.SetStateAction<IProducts[]>>,
  filteredProducts: string,
  setFilteredProducts: React.Dispatch<React.SetStateAction<string>>,
  currentSale: [] | IProducts[],
  setCurrentSale: React.Dispatch<React.SetStateAction<IProducts[]>>,
  handleClick: (productId: number | null) => void
}
interface ICardProviderProps {
  children: React.ReactNode;
}

export const CardContext = createContext({} as ICardContextProps);

export const CardProvider = ({ children }: ICardProviderProps) => {
  const { getAllProducts } = useContext(UserContext)

  const [list, setList] = useState<IProducts[]>([] as IProducts[]);
  const [filteredProducts, setFilteredProducts] = useState("");
  const [currentSale, setCurrentSale] = useState<IProducts[]>(
    [] as IProducts[]
  );

  useEffect(() => {
    // const token = JSON.parse(localStorage.getItem("@TOKEN")) || null

    getAllProducts(setList);
  }, [filteredProducts]);

  const handleClick = (productId: number | null) => {
    const productSale = list.filter((element) => {
      return element.id === productId;
    });

    if (currentSale.length > 0) {
      let verify = true;

      currentSale.forEach((element) => {
        if (element.id === productId) {
          toast.error("Produto já esta no carrinho!");
          verify = false;
        }
      });

      if (verify) {
        setCurrentSale([...currentSale, productSale[0]]);
      }
    } else {
      setCurrentSale([...productSale]);
    }
  };

  return (
    <CardContext.Provider
      value={{
        list,
        setList,
        filteredProducts,
        setFilteredProducts,
        currentSale,
        setCurrentSale,
        handleClick,
      }}
    >
      {children}
    </CardContext.Provider>
  );
};
