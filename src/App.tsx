import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import Background from "./components/Background/Background";
import ConverterCard from "./components/ConverterCard/ConverterCard";
import { FavoritesProvider } from "./context/Favorite";
import ChartCarousel from "./components/ChartCarousel/ChartCarousel";

function App() {
  return (
    <div className="App">
      <FavoritesProvider>
        <Background>
          <div className="App-header">
            <ConverterCard />
            <ChartCarousel />
          </div>
        </Background>
      </FavoritesProvider>
    </div>
  );
}

export default App;
