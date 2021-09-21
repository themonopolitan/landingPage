import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import MainLayout from './Layout/Main'

ReactDOM.render(
  <React.StrictMode>
    <MainLayout>
      <App />
    </MainLayout>
  </React.StrictMode>,
  document.getElementById('root')
);
