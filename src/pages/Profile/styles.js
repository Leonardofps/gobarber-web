import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 600px;
  margin: 50px auto;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    input {
      background: rgba(0, 0, 0, 0.3);
      border: 0;
      border-radius: 4px;
      height: 40px;
      padding: 0 15px;
      margin: 0 0 10px;
      color: #fff;

      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }

    span {
      color: #fb6f91;
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold;
    }

    hr {
      border: 0;
      height: 1px;
      background: rgba(255, 255, 255, 0.2);
      margin: 10px 0 20px;
    }

    button {
      background: #3b9eff;
      border: 0;
      height: 40px;
      border-radius: 4px;
      color: #fff;
      font-weight: bold;
      font-size: 16px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.05, '#3b9eff')};
      }
    }
  }

  > button {
    width: 100%;
    background: #f64c75;
    border: 0;
    height: 40px;
    border-radius: 4px;
    color: #fff;
    font-weight: bold;
    font-size: 16px;
    transition: background 0.2s;
    margin-top: 10px;

    &:hover {
      background: ${darken(0.05, '#F64c75')};
    }
  }
`;
