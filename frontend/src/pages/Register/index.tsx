import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';

import * as S from './styles';

const Register: React.FC = () => (
  <S.RegisterContainer>
    <S.Content>
      <section>
        <img src={logoImg} alt="be the hero" />
        <h1>Cadastrar</h1>
        <p>
          Faça seu cadastro, entre na plataforma e
          ajude pessoas a encontrar os casos da sua ONG.

        </p>
        <Link className="back-link" to="/">
          <FiArrowLeft size={16} color="#E02041" />
          Fazer login
        </Link>
      </section>
      <form>
        <input placeholder="nome da ONG" />
        <input placeholder="email" type="email" />
        <input placeholder="WhatsApp" />
        <S.InputGroup>
          <input placeholder="Cidade" />
          <input placeholder="UF" style={{ width: 80 }} />
        </S.InputGroup>
        <button type="submit" className="button">Cadastrar</button>
      </form>
    </S.Content>
  </S.RegisterContainer>
);

export default Register;
