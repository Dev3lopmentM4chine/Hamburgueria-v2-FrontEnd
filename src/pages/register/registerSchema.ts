import * as yup from "yup";

export const registerSchema = yup.object().shape({
  name: yup.string().required("O nome de usuário é obrigatório!"),

  email: yup.string().required("O email é obrigatório!"),

  password: yup
    .string()
    .required()
    .required("A senha é obrigatária!")
    .matches(/(?=.*?[A-Z])/, "É necessário uma letra maiúscula.")
    .matches(/(?=.*?[a-z])/, "É necessário uma letra minúscula.")
    .matches(/(?=.*?[0-9])/, "É necessário pelo menos um número.")
    .matches(
      /(?=.*?[#?!@$%^&*-])/,
      "É necessário pelo menos um caractere especial"
    )
    .min(8, "É necessário uma senha de pelos 8 caracteres"),

  passwordConfirm: yup
    .string()
    .required("Esse campo é obrigatório!")
    .oneOf([yup.ref("password")], "As senhas devem ser iguais!"),
});
