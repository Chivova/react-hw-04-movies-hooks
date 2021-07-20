import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

export default function Navigation() {
  return (
    <nav className={s.navBar}>
      <NavLink exact className={s.link} to="/" activeClassName={s.activeLink}>
        Home
      </NavLink>
      <NavLink className={s.link} to="/movies" activeClassName={s.activeLink}>
        Movies
      </NavLink>
    </nav>
  );
}
