import React from "react";
import{Link} from "react-router-dom";
import data from "../components/stock-data" 

const Stocks = (props) => {


return (
  <div className="Stocks">
    {data.map((stock, index) => {
      const { name, symbol, lastPrice, change } = stock;

      return (
        <Link key={index} to={`/stocks/${symbol}`}>
          <h2>{name}</h2>
          <h2>{lastPrice}</h2>
          <h2>{change}</h2>
        </Link>
      );
    })}
  </div>
  );
}
export default Stocks;




