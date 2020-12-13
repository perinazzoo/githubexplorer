import React from 'react';
import { Link } from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi';

import api from '../../services/api';

import logoimage from '../../assets/logo_img.svg';

import * as S from './styles';

interface Repository {
  id: number;
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const Home: React.FC = () => {
  const searchRef = React.useRef(null);
  const [repositories, setRepositories] = React.useState<Repository[]>([]);

  async function handleAddRepository(e: React.FormEvent): Promise<void> {
    try {
      e.preventDefault();

      const inputValue = searchRef.current.value;

      const response = await api.get<Repository>(`/repos/${inputValue}`);

      console.log([response?.data, ...repositories]);

      setRepositories([response?.data, ...repositories]);
    } catch (err) {
      //
    }
  }

  return (
    <>
      <img src={logoimage} alt="Github Explorer" />
      <S.Title>Explore repositórios no Github.</S.Title>
      <S.Form onSubmit={handleAddRepository}>
        <input ref={searchRef} type="text" placeholder="Busque repositórios" />
        <button type="submit">Pesquisar</button>
      </S.Form>

      <S.Repositories>
        {repositories?.map(repository => (
          <Link to="/" key={repository?.id}>
            <img
              src={repository?.owner?.avatar_url}
              alt={repository?.owner?.login}
            />

            <div>
              <strong>{repository?.full_name}</strong>
              <p>{repository?.description}</p>
            </div>

            <FiChevronRight size={28} color="#C9C9D4" />
          </Link>
        ))}
      </S.Repositories>
    </>
  );
};

export default Home;
