import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');
  
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }

  body{
    font: 400 14px 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
    background: #f0f0f5;
  }

  input,button,textarea{
    font: 400 18px 'Roboto', sans-serif;
  }

  button{
    cursor: pointer;
  }
`;
