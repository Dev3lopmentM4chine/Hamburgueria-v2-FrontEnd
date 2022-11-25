import style from "./style.module.css";

const Button = ({ children, type, onClick }) => {
  return (
    <button className={style.Button} type={type} onClick={onClick}>
      {children}
    </button>
  );
}

export {Button}