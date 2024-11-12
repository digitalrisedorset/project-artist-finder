import styled, {createGlobalStyle} from "styled-components";

export const GlobalStyles = createGlobalStyle`
    @font-face {
        font-weight: normal;
        font-style: normal;
    }

    html {
        --red: #595f39;
        --black: #1B1B1B;
        --grey: #C4C5BA;
        --gray: var(--grey);
        --lightGrey: #e1e1e1;
        --lightGray: var(--lightGrey);
        --offWhite: #E4E4DE;
        --maxWidth: 1000px;
        --bs: 0 12px 24px 0 rgba(0, 0, 0, 0.09);
        --valid: #cdf2e2;
        --invalid: #ff9d00;
        --updated: lightblue;
        --deleted: var(--red);
        box-sizing: border-box;
        font-size: 10px;

    }

    *, *:before, *:after {
        box-sizing: inherit;
    }

    body {
        font-family: 'radnika_next', --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        padding: 0;
        margin: 0;
        font-size: 1.5rem;
        line-height: 2;
        position: relative;
    }

    a {
        text-decoration: none;
        color: var(--black);
    }

    a:hover {
        text-decoration: underline;
    }

    button {
        font-family: 'radnika_next', --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        background: var(--red);
        color: white;
        font-weight: 300;
        border: 0;
        border-radius: 0;
        text-transform: uppercase;
        font-size: 1.5rem;
        padding: 0.8rem 1.5rem;
        transform: skew(-1deg);
        display: inline-block;
        transition: all 0.5s;
        margin: 10px 0;

        &[disabled] {
            opacity: 0.5;
        }
    }

    .small-hint {
        font-size: medium;
        font-weight: normal;
    }
`;

export const ErrorStyles = styled.div`
    padding: 2rem;
    background: white;
    margin: 2rem 0;
    border: 1px solid rgba(0, 0, 0, 0.05);
    border-left: 5px solid red;

    p {
        margin: 0;
        font-weight: 100;
    }

    strong {
        margin-right: 1rem;
    }
`;