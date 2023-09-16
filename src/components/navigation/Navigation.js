import { NavLink } from 'react-router-dom';
import css from '../../components/navigation/css/navigation.module.css';

const Navigation = () => {
  return (
    <nav>
      <ul className={css.ul}>
        <li>
          <NavLink to="/" className={css.navLink}>
                      <button type="button">Home</button>
            
          </NavLink>
        </li>
        <li>
          <NavLink to="/catalog" className={css.navLink}>
                      <button type="button">Catalog</button>
            
          </NavLink>
        </li>
        <li>
          <NavLink to="/favorites" className={css.navLink}>
                      <button type="button">Favorites</button>
            
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default Navigation;