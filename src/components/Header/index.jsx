import style from "./style.module.css";
import {InputSearch} from "../InputSearch"
import {Logo} from "../Logo"

const Header = () => {
  return (
    <>
      <header className={style.Header}>
        <Logo/>
        <InputSearch/>
      </header>
    </>
  );
};


export {Header}