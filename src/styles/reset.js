import { createGlobalStyle } from "styled-components";

export const Reset = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Inter', sans-serif;
}

input{
    outline: none;
    border: none;
    background-color: unset;
}
button{
    border: none;
    background-color: unset;
    cursor: pointer;
}

ul, ol, li{
    list-style: none;
}

#root {
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
}
`;
