import { createContext, useState } from 'react';

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (favoritePhone) => {},
  removeFavorite: (phoneId) => {},
  itemIsFavorite: (phoneId) => {},
});

export function FavoritesContextProvider(props) {
  const [userFavorites, setUserFavorites] = useState([]);

  function addFavoriteHandler(favoritePhone) {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.concat(favoritePhone);
    });
  }

  function removeFavoriteHandler(phoneId) {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.filter((phone) => phone.id !== phoneId);
    });
  }

  function itemIsFavoriteHandler(phoneId) {
    return userFavorites.some((phone) => phone.id === phoneId);
  }

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    itemIsFavorite: itemIsFavoriteHandler,
  };
  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContext;
