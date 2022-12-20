import { StyledInputSearch } from "./style";
import { Button } from "../Button";
import { IInputSearchProps } from "./interface";

export const InputSearch = ({ setFilteredProducts }: IInputSearchProps) => {
  return (
    <>
      <StyledInputSearch
        onSubmit={(event) => {
          event.preventDefault();
          setFilteredProducts(event.target.inputText.value);
        }}
      >
        <input name="inputText" type="text" placeholder="Digitar Pesquisa" />

        <Button children={"Pesquisar"} type={"submit"} />
      </StyledInputSearch>
    </>
  );
};
