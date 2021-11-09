import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
// импорт компонента Provider
import { Provider } from 'react-redux';
// импорт объекта глобального состояния
import { store } from './redux/store';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      {/* Provider */}
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
