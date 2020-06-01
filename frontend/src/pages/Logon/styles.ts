import styled from 'styled-components';

export const LogonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between; 

  width: 100%;
  max-width: 1120px;
  height: 100vh;
  margin: 0 auto;
`;
export const Form = styled.section`
  width: 100%;
  max-width: 320px;
  margin-right: 30px;
    
    form{
      margin-top: 100px;
    } 

    h1{
      font-size: 32px;
      margin-bottom: 32px;
    }

    a{
      text-decoration: none;
      color: #41414d;
      margin-top: 40px;
      font-size: 18px;
      font-weight: 500; 
      transition: filter 0.5s;
      display: flex;
      align-items: center;
      transition: opacity 0.2s;
    }

    a svg{
      margin-right: 8px;
    }
    a:hover{
    opacity: 0.8;
  }
`;
