import "./SearchPopup.css";

const SearchPopup = () => {
  return (
    <div className="search_popup">
      <h2>Search</h2>
      <form>
        <p>Destination</p>
        <input className="search_popup_input" type="number"></input>
        <p>Check-in Date</p>
        <input
          className="search_popup_input"
          placeholder="06/24/2022 to 06/24/2022"
        ></input>
        <p>Options</p>
        <div>
          <div className="option">
            <label>Min price per night</label>
            <input className="option_input" type="number"></input>
          </div>
          <div className="option">
            <label>Max price per night</label>
            <input className="option_input" type="number"></input>
          </div>
          <div className="option">
            <label>Adult</label>
            <input className="option_input" type="number"></input>
          </div>
          <div className="option">
            <label>Children</label>
            <input className="option_input" type="number"></input>
          </div>
          <div className="option">
            <label>Room</label>
            <input className="option_input" type="number"></input>
          </div>
        </div>
      </form>
      <button>Search</button>
    </div>
  );
};

export default SearchPopup;
