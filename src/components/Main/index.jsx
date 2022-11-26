import {StyledMain} from "./style.js"
import { ProductsList } from "../ProductsList/index.jsx"

const Main = ({ list }) => {
  return (
    <StyledMain>
        <ProductsList list={list}/>
    </StyledMain>
  )
}

export { Main }