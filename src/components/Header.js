import logo from "../images/logo.svg";

export default function Header() {
  return (
    <header>
      <img src={logo} alt="Splitter app" className="header__logo" />
    </header>
  );
}
