import { Anchor } from "antd";

const { Link } = Anchor;

const Nav = () => {
  return (
    <nav className="navbar">
      <h1 className="nav-name">SpaTime Salon</h1>

      <Anchor targetOffset="65" className="anchor">
        <Link href="#about" title="Introduction" className="link" />
        <Link href="#service" title="Services" className="link" />
        <Link href="#price" title="Prices" className="link" />
        <Link href="#book" title="Book appointment" className="link" />
        <Link href="#contact" title="Contact" className="link" />
      </Anchor>
    </nav>
  );
};

export default Nav;
