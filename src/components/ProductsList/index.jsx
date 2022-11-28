import {StyledProductsList} from "./style.js"
import {Product} from "../Product"

const ProductsList = ({ list, handleClick }) => {

  return (
    <StyledProductsList>
      {
        list.map((element, index) => <Product key={index} prod={element} handleClick={handleClick}/>)
      }
    </StyledProductsList>
  )
}

export {ProductsList}