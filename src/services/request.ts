import { api } from "./api.js";
import { Ilogin, Iregister, IgetAllProductsProps } from "./interface";

export interface IProducts {
  id: number;
  name: string;
  category: string;
  price: number;
  img: string;
}

export const getAllProducts = async (setList: (data: IProducts[]) => void) => {
  try {
    const response = await api.get("/products", {
      headers: {
        authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RlMTAxQGdtYWlsLmNvbSIsImlhdCI6MTY3MTU1MzkyMywiZXhwIjoxNjcxNTU3NTIzLCJzdWIiOiI3NSJ9.OElGonvoHR2PTsTCvWteNwETPKeWh1gVNFnYgiB8csc`,
      },
    });
    setList(response.data);
  } catch (error) {
    console.log(error);
  }
};

export const login = async (data: Ilogin) => {
  try {
    const response = await api.post("/login", data);
    //salvar no local storage
    localStorage.setItem("", JSON.stringify(response.data.accesstoken));
    //redirecionar para a home
  } catch (error) {
    console.log(error);
  }
};

export const register = async (data: Iregister) => {
  try {
    const response = await api.post("/users", data);
    //toastify de sucesso
  } catch (error) {
    //toastify de erro
    console.log(error);
  }
};
