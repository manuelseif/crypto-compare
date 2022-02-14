import React, { useState } from "react";

const FavoritesContext = React.createContext({
  favorites: [] as FavoriteSymbol[],
  addFavorite: (currency: FavoriteSymbol) => {},
  removeFavorite: (currency: FavoriteSymbol) => {},
});

interface FavoritesValue {
  favorites: FavoriteSymbol[];
  addFavorite: (currency: FavoriteSymbol) => void;
  removeFavorite: (currency: FavoriteSymbol) => void;
}

export interface FavoriteSymbol {
  from: string;
  to: string;
}

function FavoritesProvider(props: any) {
  const [favorites, setFavorites] = useState<FavoriteSymbol[]>([]);

  const addFavorite = (symbol: FavoriteSymbol) => {
    if (!JSON.stringify(favorites).includes(JSON.stringify(symbol))) {
      setFavorites([...favorites, symbol]);
    }
  };

  const removeFavorite = (symbol: FavoriteSymbol) => {
    const newFavorites = [...favorites];
    const index = favorites.indexOf(symbol);
    if (index >= 0) {
      newFavorites.splice(index, 1);
      setFavorites(newFavorites);
    }
  };
  return (
    <FavoritesContext.Provider
      value={{ favorites, addFavorite, removeFavorite } as FavoritesValue}
    >
      {props.children}
    </FavoritesContext.Provider>
  );
}
export { FavoritesContext, FavoritesProvider };
