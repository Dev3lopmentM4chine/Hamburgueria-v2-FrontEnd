import {StyledInputSearch} from "./style.js"
import {Button} from "../Button"

const InputSearch = ({ list, setFilteredProducts }) => {
  const search = (body) => {
    let resp = ""
  }

  

  return (
    <>
      <StyledInputSearch onSubmit={(event) => {
        event.preventDefault()
        setFilteredProducts(event.target.inputText.value)
        }}>
        <input 
        name="inputText"
        type="text" 
        placeholder="Digitar Pesquisa" 
        />

        <Button children={"Pesquisar"} type={"submit"}/>
      </StyledInputSearch>
    </>
  );
};

export {InputSearch}
