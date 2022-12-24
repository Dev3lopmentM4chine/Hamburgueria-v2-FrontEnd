import { StyledInput } from "./style.js";

interface IInputProps {
  id: string;
  title: string;
  placeholder: string;
  type: string;
  register: any;
  errors?: string | any;
}

export const Input = ({
  id,
  title,
  placeholder,
  type,
  register,
  errors,
}: IInputProps) => {
  console.log(errors);

  return (
    <StyledInput>
      {/* <label htmlFor={id}>{title}</label> */}
      <input
        id={id}
        placeholder={placeholder}
        type={type}
        {...register(id)}
        required
      />
      {/* {errors?.message && <p className="errorMessage">{errors.message}</p>} */}
    </StyledInput>
  );
};
