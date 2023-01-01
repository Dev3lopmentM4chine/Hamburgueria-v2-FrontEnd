import { createGlobalStyle } from "styled-components";

export const Reset = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Inter', sans-serif;
}

html body{
  width: 100%;
  height: 100vh;
  margin: 0 auto;
}

#root{
  width: 100%;
  height: 100%;
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

.errorMessage {
  font-size: var(--font-size-3);
  font-weight: var(--font-weigth-3);
  color: var(--color-secondary);
}
`;
