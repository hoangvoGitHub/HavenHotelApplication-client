// eslint-disable-next-line react/prop-types
const Header = ({ title }) => {
  return (
    <header className="header">
      <div className="overlay"></div>
      <div className="container">
        <h1 className="header-title text-center hotel-color">{title}</h1>
      </div>
    </header>
  );
};

export default Header;
