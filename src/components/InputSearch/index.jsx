import style from "./style.module.css";
import {Button} from "../Button"

const InputSearch = () => {
  return (
    <>
      <div className={style.InputSearch}>
        <input type="text" placeholder="Digitar Pesquisa" />
        <Button children={"Pesquisar"} type={"button"}/>
      </div>
    </>
  );
};

export {InputSearch}
