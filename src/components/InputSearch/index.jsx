import {StyledInputSearch} from "./style.js"
import {Button} from "../Button"

const InputSearch = ({ list }) => {
  const search = (body) => {
    let resp = ""
  }

  return (
    <>
      <StyledInputSearch onSubmit={() => {}}>
        <input 
        type="text" 
        placeholder="Digitar Pesquisa" 
        required
        />

        <Button children={"Pesquisar"} type={"submit"}/>
      </StyledInputSearch>
    </>
  );
};

export {InputSearch}
