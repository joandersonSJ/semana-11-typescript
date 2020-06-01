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

  form input{
    width: 100%;
    height: 60px;
    color: #333;
    border: 1px solid #dcdce6;
    border-radius: 8px;
    padding: 0 24px;
  }

  .button{
    width: 100%;
    height: 60px;
    background: #e02041;
    border: 0;
    border-radius: 8px;
    color: #fff;
    font-weight: bold;
    margin-top: 16px;
    display: inline-block;
    text-align: center;
    text-decoration: none;
    font-size: 16px;
    line-height: 60px;
    transition: filter 0.5s;
  }

  .button:hover{
    filter: brightness(90%);
  }
`;
