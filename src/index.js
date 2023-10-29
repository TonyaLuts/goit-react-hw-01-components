import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { ThemeProvider } from 'styled-components';
// import './index.css';

const theme = {
  color: {
    white: '#fff',
    bg: '#d5d4d4',
    secondText: '#9a9a9a',
    secondBg: '#e8e8e8',
  },
  spasing: value => `${value * 4}px`,
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
