import { api } from "./api.js";

export interface IProducts {
  id: number;
  name: string;
  category: string;
  price: number;
  img: string;
}

export interface ILogin {
  email: string;
  password: number | string;
}

export interface IRegister{
	name: string,
	email: string,
	password: number | string,
}

export const getAllProducts = async (
  setList: (data: IProducts[]) => void
) => {
  try {
    const response = await api.get("/products", {
      headers: {
        authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RlMTAxQGdtYWlsLmNvbSIsImlhdCI6MTY3MTQ3NzcxMywiZXhwIjoxNjcxNDgxMzEzLCJzdWIiOiI1OCJ9.0cCmOf-2c3LDDtojQvCiv-9Vq4uje2xPlDnMZJ9oTlM`,
      },
    });
    setList(response.data);
  } catch (error) {
    console.log(error);
  }
};

export const login = async (data: ILogin) => {
  try {
    const response = await api.post("/login", data);
    //salvar no local storage
    localStorage.setItem("", JSON.stringify(response.data.accesstoken))
    //redirecionar para a home
  } catch (error) {
    console.log(error);
  }
};

export const register = async (data: IRegister) => {
  try {
    const response = await api.post("/users", data);
    //toastify de sucesso
  } catch (error) {
    //toastify de erro
    console.log(error);
  }
};
