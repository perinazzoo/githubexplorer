import styled from 'styled-components';

export const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    display: flex;
    align-items: center;
    color: #a8a8b3;
    font-size: 1.6rem;
    text-decoration: none;
    font-weight: 700;
    padding: 4px 0 4px 4px;

    svg {
      margin-right: 4px;
    }
  }
`;

export const RepositoryInfo = styled.section`
  margin-top: 80px;

  header {
    display: flex;
    align-items: center;

    img {
      width: 120px;
      height: 120px;
      border-radius: 50%;
    }

    div {
      margin-left: 32px;

      h1 {
        font-size: 3.6rem;
        color: #3d3d4d;
      }

      p {
        font-size: 2rem;
        color: #737380;
        margin-top: 12px;
      }
    }
  }

  ul {
    margin-top: 40px;
    list-style: none;
    display: flex;
    column-gap: 80px;

    li {
      display: flex;
      flex-direction: column;

      strong {
        color: #3d3d4d;
        font-size: 3.6rem;
      }

      span {
        color: #6c6c80;
        font-size: 2rem;
        margin-left: 4px;
      }
    }
  }
`;

export const Issues = styled.div`
  width: 100%;
  margin-top: 80px;

  a {
    width: 100%;
    display: flex;
    padding: 28px 24px;
    background-color: #fff;
    border-radius: 5px;
    text-decoration: none;
    align-items: center;
    transition: transform 0.2s ease;

    &:hover {
      transform: translateX(20px);
    }

    & + a {
      margin-top: 16px;
    }

    div {
      margin: 0 24px;
      flex: 1;

      strong {
        font-size: 2.4rem;
        color: #3d3d4d;
      }

      p {
        color: #a8a8b3;
        font-size: 1.8rem;
        margin-top: 8px;
      }
    }

    svg {
      margin-left: auto;
    }
  }
`;
