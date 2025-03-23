import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from './redux/store.js';
import SearchProvider from './contextAPI/providers/SearchProvider.jsx'
import ThemeProvider from './contextAPI/providers/ThemeProvider.jsx';
createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <SearchProvider>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </SearchProvider>
    </BrowserRouter>
  </Provider>
);
