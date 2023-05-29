import "./NavBar.css";
import NavBarItem from "./NavBarItem";

const NavBar = () => {
  //Bắt sự kiện click vào Booking Website để về trang chủ
  const ClickHandler = (event) => {
    event.preventDefault();

    window.location.replace("/");
  };

  return (
    <div className="container">
      <div className="navbar">
        <div className="nav">
          <div className="nav_brand" onClick={ClickHandler}>
            Booking Website
          </div>
          <div className="nav_links">
            <a className="nav_link">Register</a>
            <a className="nav_link">Login</a>
          </div>
        </div>
        <NavBarItem />
      </div>
    </div>
  );
};
export default NavBar;
