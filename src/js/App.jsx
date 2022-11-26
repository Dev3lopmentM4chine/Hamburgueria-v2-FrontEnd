import "../styles/App.css";
import {useEffect, useState} from "react"
import { api } from "../services/api.js"
import { Header } from "../components/Header";
import {ProductsList} from "../components/ProductsList"

export const App = () => {
  const [list, setList] = useState([])

  useEffect(()=>{
    const getAllProducts = async () => {
      try {
        const response = await api.get('')
        
        setList(response.data)
      } catch (error) {
      }
    }

    getAllProducts()
  }, [])

  return (
    <>
      <Header/>
      <ProductsList list={list}/>
    </>
  );
};
