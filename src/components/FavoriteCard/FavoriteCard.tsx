import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { Area, AreaChart, Tooltip } from "recharts";
import { getAuthenticatedCC } from "../../api";
import { FavoritesContext } from "../../context/Favorite";
import Card from "../Card/Card";
import "./style.css";

interface IProps {
  favorite: {
    from: string;
    to: string;
  };
}

const FavoriteCard = ({ favorite }: IProps) => {
  const [apiData, setApiData] = useState();
  const { removeFavorite } = useContext(FavoritesContext);
  useEffect(() => {
    fetchApiData();
  }, []);

  const fetchApiData = async () => {
    const response = await getAuthenticatedCC(
      `data/v2/histoday?fsym=${favorite.from}&tsym=${favorite.to}`
    );
    if (response) {
      setApiData(
        response.Data.Data.map((value: any) => {
          return { date: timestampToDate(value.time), value: value.close };
        })
      );
    }
  };

  const timestampToDate = (timestamp: number) => {
    const date = new Date(timestamp * 1000);
    return date.toUTCString();
  };

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active) {
      return (
        <div className="custom-tooltip">
          <p className="label">{payload[0].payload?.date}</p>
          <p className="desc">{payload[0].payload?.value} {favorite.to}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <Card title={`${favorite.from} - ${favorite.to}`}>
      <AreaChart
        width={500}
        height={250}
        data={apiData}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
          </linearGradient>
        </defs>
        <Tooltip content={<CustomTooltip />} />
        <Area
          type="monotone"
          dataKey="value"
          stroke="#82ca9d"
          fillOpacity={1}
          fill="url(#colorPv)"
        />
      </AreaChart>
      <div onClick={() => removeFavorite(favorite)}>Remove</div>
    </Card>
  );
};

export default FavoriteCard;
