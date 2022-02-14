import React from "react";
import { useContext } from "react";
import { FavoritesContext } from "../../context/Favorite";
import FavoriteCard from "../FavoriteCard/FavoriteCard";
import "./style.css";

const ChartCarousel = () => {
  const { favorites } = useContext(FavoritesContext);
  return (
    <div className="chart-carousel mt-5">
      {favorites.map((favorite) => (
        <div key={`${favorite.from}-${favorite.to}`}>
          <FavoriteCard favorite={favorite} />
        </div>
      ))}
    </div>
  );
};

export default ChartCarousel;
