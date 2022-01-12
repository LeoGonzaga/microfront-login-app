import { createGlobalStyle } from "styled-components";
import { colors } from "./constants/colors";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: ${colors.primary};
    font-family: 'Montserrat', sans-serif;
  }

  *{
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyle;
