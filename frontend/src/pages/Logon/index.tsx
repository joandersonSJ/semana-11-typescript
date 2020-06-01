import React from 'react';
import { Link } from 'react-router-dom';
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

          <Link className="back-link" to="/register">
            <FiLogIn size={16} color="#E02041" />
            Não tenho cadastro
          </Link>
        </form>
      </S.Form>

      <img src={heroesImg} alt="heroes" />
    </S.LogonContainer>
  </>
);

export default Logon;
