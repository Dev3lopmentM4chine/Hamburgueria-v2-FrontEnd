import style from "./style.module.css";

const InputSearch = () => {
  return (
    <>
      <div className={style.InputSearch}>
        <input type="text" placeholder="Digitar Pesquisa" />
        <button type="button">Pesquisar</button>
      </div>
    </>
  );
};

export default InputSearch;
