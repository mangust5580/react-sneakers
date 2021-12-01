import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { withLayout } from './layout';
import { HomePage, FavoritesPage, OrdersPage } from './pages';

function App() {
  return (
    <Routes>
      <Route path={process.env.PUBLIC_URL + '/'} element={<HomePage />} />
      <Route path={process.env.PUBLIC_URL + 'favorites'} element={<FavoritesPage />} />
      <Route path={process.env.PUBLIC_URL + 'orders'} element={<OrdersPage />} />
    </Routes>
  );
}

export default withLayout(App);
