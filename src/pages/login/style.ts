import styled from "styled-components";

export const StyledLogin = styled.form`
    width: 95%;
    max-width: 383px;
    height: 461px;
    /* background-color: var(--color-white); */
    background-color: pink;
    border-radius: var(--radius-1);
    box-shadow: 3px 3px 3px 3px var(--color-grey-0);
    padding: 26px 24px;

    display: flex;
    flex-direction: column;
    gap: 19px;

    @media (min-width: 800px) {
        width: 100%;
        max-width: 500px;
    }

    & > h3{
        color: var(--color-grey-100);
        font-size: var(--font-size-2);
        font-weight: var(--font-weight-3);
    }
    & > .containerInputs, .containerButtons{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
    }
    & > .containerInputs{
        background-color: red;
        height: 195px;
        gap: 25px;
    }
    & > .containerButtons{
        background-color: blueviolet;
        height: 196px;

        span{
            color: var(--color-grey-40);
            font-size: var(--font-size-3);
            font-weight: var(--font-weight-0);
            text-align: center;
        }
    }
`

export const StyledLoginContainer = styled.div``

