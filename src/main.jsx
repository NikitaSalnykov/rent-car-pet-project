import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'; 
import './index.css';
import { store, persistor } from './redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <BrowserRouter basename="/rent-car-pet-project">
      <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
       <App />
       </PersistGate>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
);
