import { api } from "./api.js"

export interface IProducts{
  id: number,
  name: string,
  category: string,
  price: number,
  img: string,
}

export const getAllProducts = async (setList: (data: IProducts[]) => void) => {
    try {
      const response = await api.get('')
      setList(response.data)
    } catch (error) {
      console.log(error)
    }
}