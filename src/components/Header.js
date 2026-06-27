import ReactLogo from "./React_logo1.png";

function Header() {
  return (
    <header className="app-header">
      <img src={ReactLogo} alt="Reactlogo" />
      <h1>Smart Recruitment & Interview Assessment Portal</h1>
    </header>
  );
}

export default Header;