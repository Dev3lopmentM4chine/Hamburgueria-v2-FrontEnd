import { StyledMain } from "./style.js"
import { ProductsList } from "../ProductsList/index.jsx"
import { Cart } from "../Cart"

const Main = ({ list, currentSale, setCurrentSale, filteredProducts, handleClick }) => {
  return (
    <StyledMain>
        <ProductsList list={list} filteredProducts={filteredProducts} handleClick={handleClick}/>
        <Cart currentSale={currentSale} setCurrentSale={setCurrentSale}/>
    </StyledMain>
  )
}

export { Main }