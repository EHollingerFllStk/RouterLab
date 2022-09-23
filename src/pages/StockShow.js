import React from "react";
import data from "../components/stock-data"

const StockShow = (props) => {
console.log(data)
const symbol = props.match.params.symbol
console.log(props)
const [stock, setStock] = React.useState();

    return (
      <div>
        <h1>
          {stock.name}
        </h1>
        <h2>{stock.symbol}/{stock.lastPrice}/{stock.change}</h2>
      </div>
    );
}

export default StockShow;
