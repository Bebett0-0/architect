// import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store.js';
import Blog from './Blog.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter
      future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
    >
      <Blog />
    </BrowserRouter>
  </Provider>
);
