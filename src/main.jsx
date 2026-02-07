import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Products from './pages/Products';
import Cart from './pages/Cart';
import Success from './pages/Success';
import {ProviderContext} from './context/ProductContext'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/:category?',
        element: <Products />
      },
      {
        path: '/cart',
        element: <Cart />
      },
      {
        path: '/success',
        element: <Success />
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <ProviderContext>
      <RouterProvider router={router} />
    </ProviderContext>

  </React.StrictMode>
);

