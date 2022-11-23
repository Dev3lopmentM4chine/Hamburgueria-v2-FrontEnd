import style from "./style.module.css";
import LogoImage from "../../img/logo.svg"

const Logo = () => {
  return (
    <figure className={style.Logo}>
      <img src={LogoImage} alt="Logo da Hamburgueria" />
    </figure>
  );
};

export default Logo;
