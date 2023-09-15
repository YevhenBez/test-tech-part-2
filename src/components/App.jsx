import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
// const Home = lazy(() => import('../pages/home/Home'));
const Layout = lazy(() => import('../components/layout/Layout'));
const Catalog = lazy(() => import('../pages/catalog/Catalog'));

export const App = () => {
  return (
    <div    >
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="catalog" element={<Catalog />} />
        </Route>
      </Routes>
    </div>
  );
};
