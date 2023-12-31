import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import Layout from '../components/layout/Layout';
const Home = lazy(() => import('../pages/home/Home'));
const Catalog = lazy(() => import('../pages/catalog/Catalog'));
const Favorites = lazy(() => import('../pages/favorites/Favorites'));

export const App = () => {
  return (
    <div    >
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="catalog" element={<Catalog />} />
          <Route path="favorites" element={<Favorites />} />
        </Route>
      </Routes>
    </div>
  );
};
