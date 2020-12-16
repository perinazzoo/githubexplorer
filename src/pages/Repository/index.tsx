import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { FiChevronLeft } from 'react-icons/fi';

import logoImage from '../../assets/logo_img.svg';

import * as S from './styles';

interface RepositoryParam {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParam>();

  return (
    <>
      <S.Header>
        <img src={logoImage} alt="Github Explorer" />
        <Link to="/">
          <FiChevronLeft size={18} />
          Voltar
        </Link>
      </S.Header>

      <S.RepositoryInfo>
        <header>
          <img
            src="https://avatars2.githubusercontent.com/u/2254731?s=400&u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&v=4"
            alt="Nome"
            width="120"
            height="120"
          />
          <div>
            <h1>{params?.repository}</h1>
            <p>descricao teste</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>1080</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>1080</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>1080</strong>
            <span>Issues abertas</span>
          </li>
        </ul>
      </S.RepositoryInfo>

      <S.Issues>
        <Link to="/">
          <div className="">
            <strong>asdopkqwdpo</strong>
            <p>asdopkqwdpo</p>
          </div>
        </Link>
      </S.Issues>
    </>
  );
};

export default Repository;
