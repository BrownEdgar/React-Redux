import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store, { persistor } from './app/store';

import { PersistGate } from 'redux-persist/integration/react';



ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={<h1>loading....</h1>} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// limk https://redux-toolkit.js.org/usage/usage-guide#working-with-non-serializable-data