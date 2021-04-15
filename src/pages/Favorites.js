import { useContext } from 'react';

import FavoritesContext from '../store/favorites-context';
import PhoneList from '../components/phones/PhoneList';

function FavoritesPage() {
  const favoritesCtx = useContext(FavoritesContext);

  let content;

  if (favoritesCtx.totalFavorites === 0) {
    content = <p>You got no items yet. Start adding some?</p>;
  } else {
    content = <PhoneList phones={favoritesCtx.favorites} />;
  }

  return (
    <section>
      <h1>My Wish List</h1>
      {content}
    </section>
  );
}

export default FavoritesPage;
