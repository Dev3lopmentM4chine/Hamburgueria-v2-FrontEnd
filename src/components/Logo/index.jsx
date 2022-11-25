import LogoImage from "../../img/logo.svg"

const Logo = () => {
  return (
    <figure>
      <img src={LogoImage} alt="Logo da Hamburgueria" />
    </figure>
  );
};

export {Logo}