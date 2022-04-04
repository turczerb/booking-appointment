import { useState, useEffect } from "react";
import ServiceItem from "./ServiceItem";

const Service = (props) => {
  const [data, setData] = useState([{}]);
  useEffect(() => {
    fetch("https://my-salon-api.herokuapp.com/services")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="szolg">
      <h1>Services</h1>
      {data.map((item, index) => {
        return (
          <ServiceItem key={index} name={item.name} whatisit={item.whatisit} />
        );
      })}
    </div>
  );
};

export default Service;
