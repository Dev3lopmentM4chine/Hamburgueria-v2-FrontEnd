import { api } from "./api.js"

export const getAllProducts = async (setList) => {
    try {
      const response = await api.get('')
      setList(response.data)
    } catch (error) {
      console.log(error)
    }
}