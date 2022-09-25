import React from "react";
import data from "../components/stock-data";

const StockShow = (props) => {
  console.log(data)
const symbol = props.match.params.symbol

  let thisStock 

    data.map((d)=> {
      if (d.symbol === symbol) {
        thisStock = d;
        //setStock(thisStock)
      }
    })
    
    return (
      <div>
        <h1>
        {thisStock.name}
        </h1>
        <h2>{thisStock.symbol}/{thisStock.lastPrice}/{thisStock.change}</h2>
      </div>
    );
}

export default StockShow;

