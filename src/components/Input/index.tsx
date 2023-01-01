import { StyledInput } from "./style.js";
import { TextField } from "@mui/material";
import styled from "styled-components";

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

  let name = `${id}`

  const ValidationTextField = styled(TextField)({
    '& input:valid + fieldset': {
      borderColor: 'green',
      borderWidth: 2,
    },
    '& input:invalid + fieldset': {
      borderColor: 'red',
      borderWidth: 2,
    },
    '& input:valid:focus + fieldset': {
      borderLeftWidth: 6,
      padding: '4px !important', // override inline-style
    },
  });
  

  return (

    <StyledInput>
      <ValidationTextField
        id={id}
        label={title}
        placeholder={placeholder}
        type={type}
        {...register(id)}
        error={!!errors[name]}
        helperText={
          errors[name] ? errors[name].message : ''
        }
        fullWidth
        sx={{
          height:'60px'
        }}
      />

    </StyledInput>
  );
};