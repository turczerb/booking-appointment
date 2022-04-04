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
    <div className="intro">
      <h1 className="title">Services</h1>
      <div className="intro" id="serviceid">
        {data.map((item, index) => {
          return (
            <ServiceItem
              key={index}
              name={item.name}
              whatisit={item.whatisit}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Service;
