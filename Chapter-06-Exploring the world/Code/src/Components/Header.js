import logo from "../assets/foodLogo.png";
import Login from "./Login";

const Title = () => {
  return (
    <div className="title">
      <img className="logo" src={logo}></img>
      <h2>picky</h2>
    </div>
  );
};

const NavComponents = () => {
  return (
    <>
      <ul>
        <li>
          <a href="">home</a>
        </li>
        <li>
          <a href="">contact</a>
        </li>
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">how it works</a>
        </li>
        <i className="ri-shopping-cart-2-fill"></i>
        <Login /> {/* Created toggle button functionality for login and logout button */}
      </ul>
    </>
  );
};

const Header = () => {
  return (
    <>
      <div className="header">
        <Title />
        <NavComponents />
      </div>
    </>
  );
};

export default Header;
