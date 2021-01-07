//import logo from './logo.svg';
//import './App.css';
import {GlobalStyle} from './styles/global';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import React from 'react';
import {Provider} from 'react-redux';
import store from './store';

const App = () => {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </Provider>
      <GlobalStyle/>
    </>
  );
}



export default App;
