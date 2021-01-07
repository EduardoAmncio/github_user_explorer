import styled from 'styled-components';

import imgBackground from '../../assets/background.svg';

export const Container = styled.div`
  display: flex;
  position: relative;
  width: 100vw;
  min-height: 820px;
  height: 100vh;
  background: #282A35;
  background-size: cover;

  aside {
    display: flex;
    width: 800px;
    min-height: 680px;
    padding: 20px 80px 20px 80px;
    background: #282A35 url(${imgBackground}) no-repeat;
    background-size: cover;
    flex-direction: column;
    justify-content: start;
  }

  h2 {
    color: #3BB5C6;
    margin: 80px 0 0px 10px;
  }
`;

export const Description = styled.div`
  margin-top: 20px;
  border-color: rgba(56, 58, 89, 0.5);
  border-radius: 6px;
  padding: 10px;
  
  h2 {
    margin: 0;
  }

  p {
    margin-top: 20px;
    color: #D9D9D9;
  }
`;

export const UserInfo = styled.div`
  border-color: rgba(56, 58, 89, 0.5);
  border-radius: 6px;
  display: flex;
  align-items: center;
  padding: 20px;
  
  img {
    border-radius: 50%;
    border: #3Ba5C6 1px solid;
    width: 80px;
    background: #3Ba5C6;
    margin-right: 20px;
  }

  h1 {
    font-size: 40px;
    font-weight: bold;
    color: #35A6AF; 
    padding: 3px;
  }

  a {
    text-decoration: none;
    p {
      color: #77f7ff;
      border: none;
      margin: 5px;
    }
  }
`;

export const ListRepositoryes = styled.div`

  padding: 10px;
  border-color: rgba(56, 58, 89, 0.5);
  border-radius: 10px;
  margin-top: 10px;
  width: 100%;
  min-height: 300px;
  height: 500px;

  overflow-y:scroll;
  scrollbar-width: thin;

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(80, 120, 150, 0.0);
    border-radius: 7px;
    width: 2px;
  }

  &:hover {
    &::-webkit-scrollbar-thumb {
      background-color: rgba(80, 120, 150, 0.5);
    }
  }
`;

export const ItemRepo = styled.div`
  background: #22212C;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;   
  justify-content: space-between; 
  transition: 0.2s;

  &:hover {
    transform: translateX(10px);
  }

  h2 {
    margin: 0;
    color: #35A6AF;
  }

  p {
    color: #D9D9D9;
  }
      
  div {
    display: flex;
    flex-direction: column;
    padding: 10px;
  }

  img {
    margin: 0px;
    padding: 0;
    margin-right: 10px;
    width: 20px;
  }

  & + div {
    margin-top: 10px;
  }
`;