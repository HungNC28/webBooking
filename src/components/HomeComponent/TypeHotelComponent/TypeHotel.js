import "./TypeHotel.css";

// thêm id để sử dụng biến key
const TypeHotelListData = [
  { id: 1, name: "Hotels", count: 233, image: "./images/type_1.webp" },
  { id: 2, name: "Apartments", count: 2331, image: "./images/type_2.jpg" },
  { id: 3, name: "Resorts", count: 2331, image: "./images/type_3.jpg" },
  { id: 4, name: "Villas", count: 2331, image: "./images/type_4.jpg" },
  { id: 5, name: "Cabins", count: 2331, image: "./images/type_5.jpg" },
];

const TypeHotel = () => {
  return (
    <div className="type_hotel">
      <h2>Browse by property type</h2>
      <div className="type_hotel_content">
        {/* dùng map để lấy thông tin từng phần tử  */}
        {TypeHotelListData.map((item) => (
          <div key={item.id}>
            <img src={item.image} />
            <div className="type_hotel_infor">
              <h2>{item.name}</h2>
              <p>{item.count}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TypeHotel;
