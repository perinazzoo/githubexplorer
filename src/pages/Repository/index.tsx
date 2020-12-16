import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import api from '../../services/api';

import logoImage from '../../assets/logo_img.svg';

import * as S from './styles';

interface RepositoryParam {
  repository: string;
}

interface Issue {
  id: number;
  html_url: string;
  title: string;
  user: {
    login: string;
  };
}

interface Info {
  description: string;
  forks_count: number;
  stargazers_count: number;
  open_issues_count: number;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParam>();
  const [issues, setIssues] = React.useState<Issue[]>([]);
  const [info, setInfo] = React.useState<Info>(null);

  React.useEffect(() => {
    (async () => {
      const [responseInfo, responseIssues] = await Promise.all([
        api.get<Info>(`/repos/${params.repository}`),
        api.get<Issue[]>(`/repos/${params.repository}/issues`),
      ]);

      setIssues(responseIssues?.data);
      setInfo(responseInfo?.data);
    })();
  }, [params.repository]);

  return (
    <>
      <S.Header>
        <img src={logoImage} alt="Github Explorer" />
        <Link to="/">
          <FiChevronLeft size={18} />
          Voltar
        </Link>
      </S.Header>

      {info && (
        <S.RepositoryInfo>
          <header>
            <img
              src={info.owner.avatar_url}
              alt={info.owner.login}
              width="120"
              height="120"
            />
            <div>
              <h1>{params.repository}</h1>
              <p>{info.description}</p>
            </div>
          </header>
          <ul>
            <li>
              <strong>{info.stargazers_count}</strong>
              <span>Stars</span>
            </li>
            <li>
              <strong>{info.forks_count}</strong>
              <span>Forks</span>
            </li>
            <li>
              <strong>{info.open_issues_count}</strong>
              <span>Issues abertas</span>
            </li>
          </ul>
        </S.RepositoryInfo>
      )}

      <S.Issues>
        {issues.map(issue => (
          <a
            key={issue?.id}
            href={issue?.html_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="">
              <strong>{issue?.title}</strong>
              <p>{issue?.user?.login}</p>
            </div>

            <FiChevronRight size={28} color="#C9C9D4" />
          </a>
        ))}
      </S.Issues>
    </>
  );
};

export default Repository;
