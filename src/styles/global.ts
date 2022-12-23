import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root{
    /* Color */
    --color-primary: #27AE60;
    --color-primary-50: #93D7AF;
    --color-secondary: #EB5757;
    --color-white: #FFFFFF;
    --color-grey-100: #333333;
    --color-grey-50: #828282;
    --color-grey-40:#999999;
    --color-grey-30: #BDBDBD;
    --color-grey-20: #E0E0E0;
    --color-grey-0: #F5F5F5;

    /* Font: Size */
    /*26px*/
    --font-size-0: 1.625rem;
    /*22px*/
    --font-size-1: 1.375rem;
    /*18px*/
    --font-size-2: 1.125rem;
    /*14px*/
    --font-size-3: 0.875rem;
    /*16px*/
    --font-size-4: 1rem;
    /*12*/
    --font-size-5: 0.75rem;

    /* Font: Weight */
    --font-weight-0: 400;
    --font-weight-1: 500;
    --font-weight-2: 600;
    --font-weight-3: 700;
    --font-weight-4: 800;

    /* Radius */
    --radius-0: 8px;
    --radius-1: 4px;
}
`;
