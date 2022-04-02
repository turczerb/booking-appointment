import Nav from "./Nav";
import Welcome from "./Welcome";
import Introduction from "./Introduction";
import Service from "./Service";
import Price from "./Price";
import Contact from "./Contact";

const Home = (props) => {
  return (
    <div>
      <Nav />
      <Welcome />
      <Introduction />
      <Service />
      <Price />
      <Contact />
    </div>
  );
};

export default Home;
