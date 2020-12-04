const { createGlobalStyle } = require("styled-components");

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        list-style: none;
        box-sizing: border-box;
    }
    a{
        text-decoration: none;
    }
`