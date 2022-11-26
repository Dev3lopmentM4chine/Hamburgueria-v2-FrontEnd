import {StyledProductsList} from "./style.js"
import {Product} from "../Product"

const ProductsList = ({ list }) => {

  return (
    <StyledProductsList>
      {
        list.map((element, index) => <Product key={index} prod={element}/>)
      }
    </StyledProductsList>
  )
}

export {ProductsList}