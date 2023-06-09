import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import css from './Layout.module.css';

const Layout = () => {
  return (
    <div>
      <header>
        <ul className={css.list}>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? css.active : css.link)}
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? css.active : css.link)}
              to="/movies"
            >
              Movies
            </NavLink>
          </li>
        </ul>
      </header>
      <main className={css.main}>
        <Suspense>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};

export default Layout;
