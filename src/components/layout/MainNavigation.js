import { useContext } from 'react';
import { Link } from 'react-router-dom';
import FavoritesContext from '../../store/favorites-context';

import classes from './MainNavigation.module.scss';

function MainNavigation() {
  const favoritesCtx = useContext(FavoritesContext);
  return (
    <header className={classes.header}>
      <div className={classes.logo}>SmartPhone Wiki</div>
      <nav>
        <ul>
          <li>
            <Link to="/">Phones</Link>
          </li>
          <li>
            <Link to="/new-phone">New Phone</Link>
          </li>
          <li>
            <Link to="/favorites">
              My Favorites{' '}
              <span className={classes.badge}>
                {favoritesCtx.totalFavorites}
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
