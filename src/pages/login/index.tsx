import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { StyledLoginContainer, StyledLogin } from "./style";
import { useForm, SubmitHandler } from "react-hook-form";
import { useContext } from "react";
import { UserContext } from "../../context/userContext";
import { useNavigate } from "react-router-dom";
import { loginSchema } from "./loginSchema";
import { yupResolver } from "@hookform/resolvers/yup";

interface IFormValues {
  email: string;
  password: string;
}

export const Login = () => {
  const { login } = useContext(UserContext);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormValues>({
    resolver: yupResolver(loginSchema),
  });

  const submitFunction: SubmitHandler<IFormValues> = (data) => {
    login(data);
  };

  return (
    <StyledLoginContainer>
      <StyledLogin onSubmit={handleSubmit(submitFunction)} noValidate>
        <h3>Login</h3>

        <div className="containerInputs">
          <Input
            id="email"
            title="Email"
            placeholder="email"
            type="text"
            register={register}
            errors={errors}
          />
          <Input
            id="password"
            title="Senha"
            placeholder="Senha"
            type="password"
            register={register}
            errors={errors}
          />
        </div>

        <div className="containerButtons">
          <Button
            children="Logar"
            type="submit"
            styledSize="larguer"
            styledColor=""
          />

          <span>
            Crie sua conta para saborear muitas delícias e matar sua fome!
          </span>

          <Button
            children="Cadastrar"
            type="submit"
            onClick={() => navigate("/register")}
            styledSize="larguer"
            styledColor="grey"
          />
        </div>
      </StyledLogin>
    </StyledLoginContainer>
  );
};
