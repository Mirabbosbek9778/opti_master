import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Root from './root';
import { BrowserRouter as Router } from 'react-router-dom';
import MainContextProvider from './context/index';
import { QueryClient, QueryClientProvider } from 'react-query';
import './i18n'

const root = ReactDOM.createRoot(document.getElementById('root'));
const queryClient = new QueryClient();

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <MainContextProvider>
        <Router>
          <Root />
        </Router>
      </MainContextProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
