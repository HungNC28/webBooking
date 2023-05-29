import "./SearchList.css";

// thêm id để sử dụng biến key
const SearchListData = [
  {
    id: 1,
    name: "Tower Street Apartments",
    distance: "500m",
    tag: "Free airport taxi",
    type: "Entire studio • 1 bathroom • 21m² 1 full bed",
    description: "Studio Apartment with Air conditioning",
    free_cancel: true,
    price: 112,
    rate: 8.9,
    rate_text: "Excellent",
    image_url: "./images/hotel_search_1.webp",
  },
  {
    id: 2,
    name: "Comfort Suites Airport",
    distance: "200m",
    tag: "Free Breakfast",
    type: "Entire studio • 2 bathroom • 100m² 2 full bed",
    description: "Studio Apartment",
    free_cancel: true,
    price: 140,
    rate: 9.3,
    rate_text: "Exceptional",
    image_url: "./images/hotel_search_2.jpg",
  },
  {
    id: 3,
    name: "Four Seasons Hotel",
    distance: "100m",
    tag: "Free Parking",
    type: "1 bathroom • 51m² 2 full bed",
    description: "Hotel in Lisbon",
    free_cancel: false,
    price: 99,
    rate: 8.8,
    rate_text: "Excellent",
    image_url: "./images/hotel_search_3.jpg",
  },
];

const SearchList = () => {
  return (
    <div className="search_list">
       {/* dùng map để lấy thông tin từng phần tử  */}
      {SearchListData.map((item) => (
        <div key={item.id} className="search_list_content">
          <img src={item.image_url} />
          <div className="infor">
            <h2>{item.name}</h2>
            <p>{item.distance} from center</p>
            <p className="tag">{item.tag}</p>
            <p className="description">{item.description}</p>
            <p>{item.type}</p>
            <p className="cancel">
              {item.free_cancel ? "Free cancellation" : ""}
            </p>
            <p className="cancel_infor">
              {item.free_cancel
                ? "You can cancel later, so lock in this great price today!"
                : ""}
            </p>
          </div>
          <div className="rate_infor">
            <div className="rate_search">
              <p className="rate_text">{item.rate_text}</p>
              <p className="rate_number">{item.rate}</p>
            </div>
            <div className="price_search">
              <p className="price_number">${item.price}</p>
              <p className="price_text">Includes taxes and fees</p>
              <button className="price_btn">See availability</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SearchList;
