import { createGlobalStyle } from "styled-components";
const GlobalStyles = createGlobalStyle`
* {
        margin: 0;
        padding:0;
        box-aizing: border-box;
}
  body {
        font-family: 'inter', 'Arial', sans-serif;
        background-color: #ffffff;
        color: #000000;
        height: 100vh;
        overflow: hidden;
        padding: 20px;
        --webkit-font-smoothing: antialiased;
        -mox-osx-font-smoothing: grayscale;
}

Html, body, #_next {
        height: 100%
}
a {

}
`
export default GlobalStyles;