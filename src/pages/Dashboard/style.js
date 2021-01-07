import styled, {css} from 'styled-components';

import imgBackground from '../../assets/background.svg';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background: #282A35 url(${imgBackground}) no-repeat;
  background-size: cover;
  width: 100vw;
  height: 100vh;

  img {
    width: 300px;
    margin-top: 20px;
  }
`;

export const Title = styled.h1`
  font-size: 30px;
  font-weight: bold;
  color: #3BB5C6; 
  margin-top: 80px;
  padding: 3px;
`;

export const Form = styled.form`
  margin-top: 20px;
  height: 65px;
  min-width: 50vw;
  padding: 3px;
  display: flex;

  input {
    flex: 1;
    padding: 0 24px;
    border-radius: 10px 0 0 10px;
    background-color: #ffffff;
    color: #818181;
    border: 2px solid #ffffff;
    border-right: 0;

    ${props =>
      props.hasError &&
      css`
        border-color: #c6226f;
      `}
  }

  button {
    width: 120px;
    border: 0;
    border-radius: 0 10px 10px 0;
    background: #3BB5C6;
    color: #fff;
    font-weight: bold;
    transition: 0.2s;

    &:hover {
      background: #3B85C6;
      font-size: 20px;
    }

  }
`;

export const Error = styled.span`
  color: #c6226f;
  display: block;
  margin-top: 6px;
`;

