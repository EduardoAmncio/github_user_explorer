import { applyMiddleware, createStore } from "redux";
import rootReducer from './modules/rootReducer';
import {composeWithDevTools} from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import rootSaga from "./modules/rootSaga";


const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

const store = createStore(
  rootReducer, 
  composeWithDevTools(
    applyMiddleware(...middlewares)
  ));

  sagaMiddleware.run(rootSaga);

export default store;