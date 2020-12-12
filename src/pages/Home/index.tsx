import React from 'react';
import { Link } from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi';

import logoimage from '../../assets/logo_img.svg';

import * as S from './styles';

const Home: React.FC = () => {
  return (
    <>
      <img src={logoimage} alt="Github Explorer" />
      <S.Title>Explore repositórios no Github.</S.Title>
      <S.Form>
        <input type="text" placeholder="Busque repositórios" />
        <button type="submit">Pesquisar</button>
      </S.Form>

      <S.Repositories>
        <Link to="/">
          <img
            src="https://avatars0.githubusercontent.com/u/53301430?s=460&u=ce2549ed21fd0970ca1ed2349a1326be116533d9&v=4"
            alt="Gabriel Perinazzo"
          />

          <div>
            <strong>perinazzoo/perinazzoo</strong>
            <p>Descrição repo</p>
          </div>

          <FiChevronRight size={28} color="#C9C9D4" />
        </Link>

        <Link to="/">
          <img
            src="https://avatars0.githubusercontent.com/u/53301430?s=460&u=ce2549ed21fd0970ca1ed2349a1326be116533d9&v=4"
            alt="Gabriel Perinazzo"
          />

          <div>
            <strong>perinazzoo/perinazzoo</strong>
            <p>Descrição repo</p>
          </div>

          <FiChevronRight size={28} color="#C9C9D4" />
        </Link>

        <Link to="/">
          <img
            src="https://avatars0.githubusercontent.com/u/53301430?s=460&u=ce2549ed21fd0970ca1ed2349a1326be116533d9&v=4"
            alt="Gabriel Perinazzo"
          />

          <div>
            <strong>perinazzoo/perinazzoo</strong>
            <p>Descrição repo</p>
          </div>

          <FiChevronRight size={28} color="#C9C9D4" />
        </Link>

        <Link to="/">
          <img
            src="https://avatars0.githubusercontent.com/u/53301430?s=460&u=ce2549ed21fd0970ca1ed2349a1326be116533d9&v=4"
            alt="Gabriel Perinazzo"
          />

          <div>
            <strong>perinazzoo/perinazzoo</strong>
            <p>Descrição repo</p>
          </div>

          <FiChevronRight size={28} color="#C9C9D4" />
        </Link>

        <Link to="/">
          <img
            src="https://avatars0.githubusercontent.com/u/53301430?s=460&u=ce2549ed21fd0970ca1ed2349a1326be116533d9&v=4"
            alt="Gabriel Perinazzo"
          />

          <div>
            <strong>perinazzoo/perinazzoo</strong>
            <p>Descrição repo</p>
          </div>

          <FiChevronRight size={28} color="#C9C9D4" />
        </Link>
      </S.Repositories>
    </>
  );
};

export default Home;
