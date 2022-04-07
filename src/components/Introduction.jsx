import { useState, useEffect } from "react";

const Introduction = (props) => {
  const [data, setData] = useState({});
  const [showMore, setShowMore] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    //console.log("initiating fetch");
    fetch("https://my-salon-api.herokuapp.com/introduction")
      .then((response) => response.json())
      .then((data) => setData(data))
      .then(() => {
        setLoading(false);
      });
  }, []);

  return showMore ? (
    <div className="intro">
      <h1 className="title" id="about">
        Introduction
      </h1>
      <p>{data.stroyless}</p>
      <p>{data.storymore}</p>
      <button className="btn-nav" onClick={() => setShowMore(!showMore)}>
        Show less
      </button>
    </div>
  ) : (
    <div className="intro">
      <h1 className="title" id="about">
        Introduction
      </h1>
      <p>{data.stroyless}</p>
      <button className="btn-nav" onClick={() => setShowMore(!showMore)}>
        Show more
      </button>
    </div>
  );
};

export default Introduction;
