import { useContext } from 'react';

import Card from '../ui/Card';
import classes from './PhoneItem.module.css';
import FavoritesContext from '../../store/favorites-context';

function PhoneItem(props) {
  const favoritesCtx = useContext(FavoritesContext);

  const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id);

  function toggleFavoriteStatusHandler() {
    if (itemIsFavorite) {
      favoritesCtx.removeFavorite(props.id);
    } else {
      favoritesCtx.addFavorite({
        id: props.id,
        name: props.name,
        description: props.description,
        image: props.image,
        price: props.price,
      });
    }
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.name} />
        </div>
        <div className={classes.content}>
          <h3>{props.name}</h3>
          <p>{props.price}$</p>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavoriteStatusHandler}>
            {itemIsFavorite ? 'Remove from Cart' : 'BUY'}
          </button>
        </div>
      </Card>
    </li>
  );
}

export default PhoneItem;
