import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body {
        font-family: 'Source Sans Pro', sans-serif;
        margin: 0;
        padding: 0;
        border: none;
        outline: none;
        width: 100vw;
        height: 100vh;
        box-sizing: border-box;
    }
    h3 {
        margin: 0;
    }
    :root{
        --primary: #53FFAB;
        --paper: #313A49;
        --background: #202632;
        --text: #D2E4EE;
    }
`;

export default GlobalStyle;