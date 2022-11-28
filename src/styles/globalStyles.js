import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Overpass:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&family=Poppins:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,200;1,300;1,400;1,500;1,600;1,700&display=swap');
    body{
        background-color: #000000;
        font-family: 'Poppins', sans-serif;
        color:#ffffff;
        font-weight:400;
        font-size:16px;
    }
    button{
        border:none;
    }
    input{
        border:none;
    }
`;

export default GlobalStyle;
