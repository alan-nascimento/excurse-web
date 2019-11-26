import styled from 'styled-components';

import { Background } from '~/assets';

export const Wrapper = styled.div`
  height: 100%;
  background: url(${Background}) no-repeat center;
  background-position: 50% 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 500px;
  text-align: center;

  form {
    background: #fff;
    padding: 50px;
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    input {
      border: 1px solid #ced0d4;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #2d2d2d;
      margin: 0 0 10px;

      &::placeholder {
        color: rgba(0, 0, 0, 0.4);
      }
    }

    a {
      color: #fff;
      margin-top: 15px;
      font-size: 16px;
      opacity: 0.8;

      &:hover {
        opacity: 1;
      }
    }
  }
`;
