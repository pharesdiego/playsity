import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const render = () => {
  ReactDOM.render(
    <BrowserRouter>
      <Provider store={store}>
        <App></App>
      </Provider>
    </BrowserRouter>
  , document.getElementById('root'));
};

store.subscribe(() => {
  try {
    window.localStorage.setItem('PLAYSITY_STORE', JSON.stringify(store.getState()))
  }
  catch(e) {
    console.log('your browser cant handle window.localStorage');
  }
  render();
});

render();
registerServiceWorker();
