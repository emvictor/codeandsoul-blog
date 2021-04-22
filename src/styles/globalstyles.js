import { createGlobalStyle } from "styled-components";
import { Reset } from "./reset";

export const GlobalStyles = createGlobalStyle`

${Reset}

 html, body{
    font-family: 'Courier New', Courier, monospace, "Helvetica Neue", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #ffffff;
    color: black;
    font-size: 1rem;
    margin: 0;
 }

 .readmore-container{ 
   padding: 3.125rem 10%;

 }

`;
