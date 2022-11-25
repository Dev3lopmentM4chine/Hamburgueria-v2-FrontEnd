import {StyledInputSearch} from "./style.js"
import {Button} from "../Button"

const InputSearch = () => {
  return (
    <>
      <StyledInputSearch>
        <input type="text" placeholder="Digitar Pesquisa" />
        <Button children={"Pesquisar"} type={"button"}/>
      </StyledInputSearch>
    </>
  );
};

export {InputSearch}
