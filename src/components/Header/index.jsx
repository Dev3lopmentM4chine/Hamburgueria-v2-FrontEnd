import style from "./style.module.css";
import Logo from "../Logo";
import InputSearch from "../InputSearch";

const Header = () => {
  return (
    <>
      <header className={style.Header}>
        <Logo />
        <InputSearch />
      </header>
    </>
  );
};

export default Header;
