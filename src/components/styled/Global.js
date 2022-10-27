import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@700&display=swap');


*{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}
a{
    text-decoration: none;
}
body{
      font-family: 'Inter', sans-serif;
    
    
}

`
export default GlobalStyles;