import { createContext } from "react";
import { api } from "../services/api";
import { IProducts } from "../services/interface";
import { toast } from "react-toastify";

interface IUserProviderProps {
  children: React.ReactNode;
}

interface IUserCotextProps {
  login: (data: Ilogin) => void;
  register: (data: Iregister) => void;
  getAllProducts: ({setList, token}: IgetAllProductsProps) => void;
}

interface Ilogin {
  email: string;
  password: number | string;
}

interface Iregister {
  name: string;
  email: string;
  password: number | string;
}

interface IgetAllProductsProps{
  setList: React.Dispatch<React.SetStateAction<IProducts[]>>;
  token?: string;
}

export const UserContext = createContext({} as IUserCotextProps);

export const UserProvider = ({ children }: IUserProviderProps) => {
  const login = async (data: Ilogin) => {
    try {
      const response = await api.post("/login", data);
      //salvar no local storage
      localStorage.setItem("", JSON.stringify(response.data.accesstoken));
      //redirecionar para a home
    } catch (error) {
      console.log(error);
    }
  };

  const register = async (data: Iregister) => {
    try {
      const response = await api.post("/users", data);
      //toastify de sucesso
    } catch (error) {
      //toastify de erro
      console.log(error);
    }
  };

  const getAllProducts = async ({setList, token}: IgetAllProductsProps) => {
    try {
      const response = await api.get("/products", {
        headers: {
          authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RlMTAxQGdtYWlsLmNvbSIsImlhdCI6MTY3MTU5ODkyOSwiZXhwIjoxNjcxNjAyNTI5LCJzdWIiOiIzIn0.gbF941-z5ixSQR5umPrwrQ-_Jtgc1J0eQu65lFlLyGc`,
        },
      });
      setList(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <UserContext.Provider value={{ login, register, getAllProducts }}>
      {children}
    </UserContext.Provider>
  );
};
