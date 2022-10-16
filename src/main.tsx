import React from 'react'
import ReactDOM from 'react-dom/client'
import { pokemonsReducer } from './redux/reducers/pokemons';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'
import { applyMiddleware, compose, legacy_createStore as createStore } from 'redux';
import App from './App'
import './index.css'
import { logger } from './redux/middlewares';

const composeAlt = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const composeEnhancers = composeAlt(
  applyMiddleware(thunk, logger),
)

const store = createStore(pokemonsReducer, composeEnhancers);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
