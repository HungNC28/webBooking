import "./Header.css";
import Date_Range from "./DateRange";

const Header = () => {
  // Bắt vào sự kiện Click nút Search
  const ClickHandler = (event) => {
    event.preventDefault();

    // chuyển đến trang search
    window.location.replace("/search");
  };

  return (
    <div className="container">
      <div className="header">
        <h2>A lifetime of discounts? It's Genius.</h2>
        <p>
          Get rewarded for your trarvels - unlock instant savings of 10% or more
          with a free account
        </p>
        <button className="btn btn_sign">Sign in / Register</button>
      </div>
      <form className="form">
        <div className="form_item">
          <i className="fa fa-bed"></i>
          <input type="text" placeholder="Where are you going?"></input>
        </div>
        <div className="form_item form_date_range">
          <i className="fa fa-calendar"></i>
          <Date_Range />
        </div>
        <div className="form_item">
          <i className="fa fa-female"></i>
          <input
            type="text"
            placeholder="1 adult - 0 children - 1 room"
          ></input>
        </div>
        <button className="btn btn_submit" onClick={ClickHandler}>
          Search
        </button>
      </form>
    </div>
  );
};

export default Header;
