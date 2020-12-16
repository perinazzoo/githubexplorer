import React from 'react';
import { Link } from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi';

import api from '../../services/api';

import logoImage from '../../assets/logo_img.svg';

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
  const [inputError, setInputError] = React.useState('');
  const [repositories, setRepositories] = React.useState<Repository[]>(
    JSON.parse(localStorage.getItem('@githubexplorer')) || [],
  );

  React.useEffect(() => {
    localStorage.setItem('@githubexplorer', JSON.stringify(repositories));
  }, [repositories]);

  async function handleAddRepository(e: React.FormEvent): Promise<void> {
    try {
      e.preventDefault();

      const inputValue = searchRef.current.value;

      const repoExists = repositories.some(
        repository =>
          repository?.full_name?.toLowerCase() === inputValue?.toLowerCase(),
      );

      if (repoExists) {
        setInputError('Repositório já está listado.');
        return;
      }

      if (!inputValue) {
        setInputError('Digite o autor/nome do repositório.');
        return;
      }

      const response = await api.get<Repository>(`/repos/${inputValue}`);

      setRepositories([response?.data, ...repositories]);

      searchRef.current.value = '';
      setInputError('');
    } catch (err) {
      setInputError(
        'Erro ao buscar o repositório, possívelmente ele não existe.',
      );
    }
  }

  return (
    <>
      <img src={logoImage} alt="Github Explorer" />
      <S.Title>Explore repositórios no Github.</S.Title>
      <S.Form hasError={!!inputError} onSubmit={handleAddRepository}>
        <input ref={searchRef} type="text" placeholder="Busque repositórios" />
        <button type="submit">Pesquisar</button>
      </S.Form>

      <S.Error>{inputError}</S.Error>

      <S.Repositories>
        {repositories?.map(repository => (
          <Link
            to={`/repository/${repository?.full_name}`}
            key={repository?.id}
          >
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
