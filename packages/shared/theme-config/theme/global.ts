import { createGlobalStyle } from "styled-components";
import { defaultFontFamily } from "../constants";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${defaultFontFamily};
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizelegibility;
    list-style: none;
    font-weight: ${({ theme }) => theme.fonts.weight.regular};

    /* Scroll bar style */
    scrollbar-width: thin;
    scrollbar-color: blue orange;

    ::-webkit-scrollbar {
      width: .4rem;
      height: .4rem;
    }

    ::-webkit-scrollbar-track {
      background: ${({ theme }) => theme.colors.text400};
    }

    ::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.colors.primary};
      border-radius: 20px;
    }
  }

  body {
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
  }

  button {
    cursor: pointer;
    background: none;
    border: none;
    outline: none;
  }

  p, span, label, li {
    font-size: ${({ theme }) => theme.fonts.sizes.sm};
  }

  h1 {
    font-size: ${({ theme }) => theme.fonts.sizes.xl};
    font-weight: ${({ theme }) => theme.fonts.weight.bold};
    margin-bottom: 1rem;
  }

  h2 {
    font-size: ${({ theme }) => theme.fonts.sizes.lg};
    font-weight: ${({ theme }) => theme.fonts.weight.medium};
  }

  h3, h4, h5, h6, strong {
    font-weight: ${({ theme }) => theme.fonts.weight.medium};
  }

  fieldset {
    border: none
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  hr {
    display: block;
    height: 1px;
    width: 100%;
    border: 0;
    border-top: 1px solid ${({ theme }) => theme.colors.text200};
  }
`;
