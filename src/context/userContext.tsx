import { createContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { IProducts } from "../services/interface";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

interface IUserProviderProps {
  children: React.ReactNode;
}

interface IUserCotextProps {
  login: (data: Ilogin) => void;
  register: (data: Iregister) => void;
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

interface IgetAllProductsProps {
  setList: React.Dispatch<React.SetStateAction<IProducts[]>>;
  token?: string;
}

export const UserContext = createContext({} as IUserCotextProps);

export const UserProvider = ({ children }: IUserProviderProps) => {
  const [list, setList] = useState<IProducts[]>([] as IProducts[]);
  const [filteredProducts, setFilteredProducts] = useState("");

  const navigate = useNavigate();

  const login = async (data: Ilogin) => {
    try {
      const response = await api.post("/login", data);
      localStorage.setItem(
        "@accesstoken",
        JSON.stringify(response.data.accesstoken)
      );
      navigate("/home");
    } catch (error) {
      console.log(error);
      toast.error("Email ou senha incorretos!");
    }
  };

  const register = async (data: Iregister) => {
    try {
      const response = await api.post("/users", data);
      toast.success("Conta criada com sucesso!");
    } catch (error) {
      console.log(error);
      // toast.error("")
    }
  };

  return (
    <UserContext.Provider
      value={{
        login,
        register,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
