import styled from 'styled-components';
import { shade } from 'polished';

export const Title = styled.h1`
  font-size: 4.8rem;
  font-weight: 700;
  line-height: 5.6rem;
  color: #3a3a3a;
  margin-top: 100px;
  max-width: 450px;
`;

export const Form = styled.form`
  margin-top: 40px;
  width: 100%;
  display: flex;
  height: 72px;

  input {
    flex: 1;
    border: 0;
    border-radius: 5px 0 0 5px;
    padding: 0 28px;
    font-size: 2rem;

    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    background: #04d361;
    color: #fff;
    width: 210px;
    font-size: 1.8rem;
    border: 0;
    border-radius: 0 5px 5px 0;
    transition: background 0.3s;

    &:hover {
      background: ${shade(0.2, '#04d361')};
    }
  }
`;

export const Repositories = styled.div`
  width: 100%;
  margin-top: 120px;

  a {
    width: 100%;
    display: flex;
    padding: 16px;
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

    img {
      width: 80px;
      height: 80px;
      border-radius: 50%;
    }

    div {
      margin-left: 24px;

      strong {
        font-size: 2.4rem;
        color: #3d3d4d;
      }

      p {
        color: #a8a8b3;
        font-size: 1.8rem;
        margin-top: 4px;
      }
    }

    svg {
      margin-left: auto;
    }
  }
`;
