import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { withLayout } from './layout';
import { HomePage, FavoritesPage, OrdersPage } from './pages';

function App() {
  return (
    <Routes>
      <Route path="" element={<HomePage />} />
      <Route path="favorites" element={<FavoritesPage />} />
      <Route path="orders" element={<OrdersPage />} />
    </Routes>
  );
}

export default withLayout(App);
