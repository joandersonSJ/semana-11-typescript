import React from 'react';
import { FiLogIn } from 'react-icons/fi';
import * as S from './styles';

import logoImg from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';

const Logon: React.FC = () => (
  <>
    <S.LogonContainer>
      <S.Form>
        <img src={logoImg} alt="logo" />
        <form>
          <h1>Faça seu Logon</h1>
          <input placeholder="Sua ID" />
          <button className="button" type="submit">Entrar</button>

          <a href="/register">
            <FiLogIn size={16} color="#E02041" />
            Não tenho cadastro
          </a>
        </form>
      </S.Form>

      <img src={heroesImg} alt="heroes" />
    </S.LogonContainer>
  </>
);

export default Logon;
