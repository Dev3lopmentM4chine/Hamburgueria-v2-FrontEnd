import { StyledInputSearch } from "./style";
import { Button } from "../Button";
import { IInputSearchProps } from "./interface";
import { useForm } from "react-hook-form";

interface IsubmitProp{
  inputText?: string;
}

export const InputSearch = ({ setFilteredProducts }: IInputSearchProps) => {
  const { register, handleSubmit, formState: reset } = useForm();

  

  const submit = (data: IsubmitProp) => {
    setFilteredProducts(data.inputText)
  }

  return (
    <>
      <StyledInputSearch
        onSubmit={handleSubmit(submit)}
        noValidate
      >
        <input
          id="inputText"
          type="text"
          placeholder="Digitar Pesquisa"
          {...register("inputText")}
        />

        <Button children={"Pesquisar"} type="submit" />
      </StyledInputSearch>
    </>
  );
};
