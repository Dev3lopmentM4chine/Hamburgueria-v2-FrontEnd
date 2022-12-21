import { createContext, useEffect, useState, useContext } from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";
import { IProducts } from "../services/interface";
import { UserContext } from "./userContext";

interface ICardContextProps {
  list: [] | IProducts[];
  setList: React.Dispatch<React.SetStateAction<IProducts[]>>;
  filteredProducts: string;
  setFilteredProducts: React.Dispatch<React.SetStateAction<string>>;
  currentSale: [] | IProducts[];
  setCurrentSale: React.Dispatch<React.SetStateAction<IProducts[]>>;
  handleClick: (productId: number | null) => void;
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}
interface ICardProviderProps {
  children: React.ReactNode;
}

export const CardContext = createContext({} as ICardContextProps);

export const CardProvider = ({ children }: ICardProviderProps) => {
  const [list, setList] = useState<IProducts[]>([] as IProducts[]);
  const [filteredProducts, setFilteredProducts] = useState("");
  const [currentSale, setCurrentSale] = useState<IProducts[]>(
    [] as IProducts[]
  );
  const [modal, setModal] = useState(false);

  useEffect(() => {
    // const token = JSON.parse(localStorage.getItem("@TOKEN")) || null

    const getAllProducts = async () => {
      const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RlMTAxQGdtYWlsLmNvbSIsImlhdCI6MTY3MTY1MDA2NCwiZXhwIjoxNjcxNjUzNjY0LCJzdWIiOiIzIn0.85nc5dvYODS8PPzG-9CxE26CI_9uonjr5jqPRl6smeU";

      if (token) {
        try {
          const response = await api.get("/products", {
            headers: {
              authorization: `Bearer ${token}`,
            },
          });
          setList(response.data);
        } catch (error) {
          console.log(error);
        }
      }
    };

    getAllProducts();
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
        modal,
        setModal,
      }}
    >
      {children}
    </CardContext.Provider>
  );
};
