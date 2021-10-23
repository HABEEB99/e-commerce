import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`


*{
    margin: 0;
    padding: 0;
    box-sizing: border-box
}

body{
    font-size: 62.5%
}

p{
    opacity: 0.6;
    line-height: 1.5;
}

img{
    max-width: 100%;
    object-fit: cover;
}

ul{
    list-style-type: none;
}

a{
    text-decoration: none;
}
`


export default GlobalStyles;