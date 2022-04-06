import { useState, useEffect } from "react";

const Contact = (props) => {
  const [data, setData] = useState({});

  useEffect(() => {
    //console.log("initiating fetch");
    fetch("https://my-salon-api.herokuapp.com/contact")
      .then((response) => response.json())
      .then((data) => setData(data))
      .then(() => {});
  }, []);

  return (
    <div className="contact" id="contact">
      <h1 className="title">Contact</h1>
      <h2>{data.name}</h2>
      <h2>{data.phone} </h2>
      <h2>{data.email}</h2>
      <h2>{data.address}</h2>
    </div>
  );
};

export default Contact;
