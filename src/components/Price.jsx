import { useEffect, useState } from "react";
import PriceItem from "./PriceItem";

const Price = (props) => {
  const [data, setData] = useState([{}]);
  useEffect(() => {
    fetch("https://my-salon-api.herokuapp.com/price")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="intro">
      <h1 className="title">Prices</h1>
      <div className="intro" id="priceid">
        {data.map((item, index) => {
          return (
            <PriceItem
              key={index}
              name={item.name}
              price={item.price}
              className="priceitem"
            />
          );
        })}
      </div>
    </div>
  );
};

export default Price;
