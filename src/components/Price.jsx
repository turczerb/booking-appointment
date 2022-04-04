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
    <div>
      <h1>Prices</h1>
      {data.map((item, index) => {
        return <PriceItem key={index} name={item.name} price={item.price} />;
      })}
    </div>
  );
};

export default Price;
