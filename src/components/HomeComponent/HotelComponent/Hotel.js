import "./Hotel.css";

// thêm id để sử dụng biến key
const HotelListData = [
  {
    id: 1,
    name: "Aparthotel Stare Miasto",
    city: "Madrid",
    price: 120,
    rate: 8.9,
    type: "Excellent",
    image_url: "./images/hotel_1.webp",
  },
  {
    id: 2,
    name: "Comfort Suites Airport",
    city: "Austin",
    price: 140,
    rate: 9.3,
    type: "Exceptional",
    image_url: "./images/hotel_2.jpg",
  },
  {
    id: 3,
    name: "Four Seasons Hotel",
    city: "Lisbon",
    price: 99,
    rate: 8.8,
    type: "Excellent",
    image_url: "./images/hotel_3.jpg",
  },
  {
    id: 4,
    name: "Hilton Garden Inn",
    city: "Berlin",
    price: 105,
    rate: 8.9,
    type: "Excellent",
    image_url: "./images/hotel_4.jpg",
  },
];

const Hotel = () => {
  return (
    <div className="hotel">
      <h2>Homes guests love</h2>
      <div className="hotel_content">
        {/* dùng map để lấy dữ liệu từng phần tử */}
        {HotelListData.map((item) => (
          <div key={item.id}>
            <img src={item.image_url} />
            {/* chuyển đến trang detail khi click vào link */}
            <a href="/detail">{item.name}</a>
            <p className="hotel_city">{item.city}</p>
            <p className="hotel_price">Starting from ${item.price}</p>
            <div className="rate">
              <p className="rate_number">{item.rate}</p>
              <p>{item.type}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hotel;
