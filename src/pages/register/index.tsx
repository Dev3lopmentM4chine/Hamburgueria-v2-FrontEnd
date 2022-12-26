import { UserContext } from "../../context/userContext";
import { useContext } from "react";
import { StyledRegisterContainer, StyledRegister } from "./style";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "./registerSchema";
import { Container } from "../../components/Container";
import { IllustrationBox } from "../../components/IllustrationBox";

interface IFormValues {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
}

export const Register = () => {
  const { register: registerRequest } = useContext(UserContext);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormValues>({
    mode: "onBlur",
    resolver: yupResolver(registerSchema),
  });

  const submitFunction: SubmitHandler<IFormValues> = (data) => {
    console.log(data);

    const newData = {
      name: data.name,
      email: data.email,
      password: data.password,
    };
    registerRequest(newData, reset);
  };

  return (
    <Container>
      <StyledRegisterContainer>
        <IllustrationBox/>

        <StyledRegister onSubmit={handleSubmit(submitFunction)} noValidate>
          <div className="panel">
            <h3>Cadastro</h3>
            <span onClick={() => navigate("/login")}>
              Retornar para o login
            </span>
          </div>

          <div className="containerInputs">
            <Input
              id="name"
              title="Nome"
              placeholder="Nome"
              type="text"
              register={register}
              errors={errors}
            />
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
            <Input
              id="passwordConfirm"
              title="Confirmar senha"
              placeholder="Confirmar senha"
              type="password"
              register={register}
              errors={errors}
            />
          </div>

          <div className="containerButtons">
            <Button
              children="Cadastrar"
              type="submit"
              styledSize="larguer"
              styledColor="grey"
            />
          </div>
        </StyledRegister>
      </StyledRegisterContainer>
    </Container>
  );
};
