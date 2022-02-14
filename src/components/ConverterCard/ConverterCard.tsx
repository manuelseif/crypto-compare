import React, { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { getAuthenticatedCC, getSymbol } from "../../api";
import { FavoritesContext } from "../../context/Favorite";
import Card from "../Card/Card";
import CurrencySelector from "../CurrencySelector/CurrencySelector";
import Input from "../Input/Input";

const ConverterCard = () => {
  const [value, setValue] = useState(1);
  const [tickerValue, setTickerValue] = useState(0);
  const [option, setOption] = useState({
    from: [] as string[],
    to: [] as string[],
  });
  const [ticker, setTicker] = useState({
    from: "ETH",
    to: "USD",
  });
  const { addFavorite } = useContext(FavoritesContext);

  useEffect(() => {
    fetchSymbols();
  }, []);

  useEffect(() => {
    fetchTickerValue();
  }, [ticker, value]);

  const fetchSymbols = async () => {
    const fromOptions: string[] = [];
    const symbols = await getSymbol();
    symbols.symbols.map((symbol: any) => {
      if (!fromOptions.includes(symbol.baseAsset)) {
        fromOptions.push(symbol.baseAsset);
      }
    });
    if (fromOptions.length > 0) {
      setOption({
        from: fromOptions,
        to: ["BTC", "ETH", "DOGE", "USD", "EUR"],
      });
    }
  };

  const fetchTickerValue = async () => {
    const tickerPrice = await getAuthenticatedCC(
      `data/price?fsym=${ticker.from}&tsyms=${ticker.to}`
    );
    if (tickerPrice) {
      setTickerValue(tickerPrice[ticker.to]);
    }
  };

  return (
    <Card
      title={
        <>
          <strong>Crypto</strong> converter
        </>
      }
    >
      <div className="input-container">
        <Input
          className="w-50"
          value={value}
          onChange={(e: any) => setValue(e.currentTarget.value)}
        />
        <CurrencySelector
          value={ticker.from}
          onChange={(value) => setTicker({ ...ticker, from: value })}
          options={option.from}
        />
      </div>
      <div className="value-container mt-5">
        <div className="w-50 value-label">
          {(+tickerValue * value).toLocaleString()}
        </div>
        <CurrencySelector
          value={ticker.to}
          onChange={(value) => setTicker({ ...ticker, to: value })}
          options={option.to}
          className="mr-3"
        />
      </div>
      <hr />
      <div onClick={() => addFavorite({ from: ticker.from, to: ticker.to })}>
        Add
      </div>
    </Card>
  );
};

export default ConverterCard;
