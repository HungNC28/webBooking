import "./City.css";

// thêm id để sử dụng biến key
const CityListData = [
  {
    id: 1,
    name: "Dublin",
    subText: "123 properties",
    image: "./images/city_1.webp",
  },
  {
    id: 2,
    name: "Reno",
    subText: "533 properties",
    image: "./images/city_2.webp",
  },
  {
    id: 3,
    name: "Austin",
    subText: "532 properties",
    image: "./images/city_3.webp",
  },
];

const City = () => {
  return (
    <div className="city">
      {/* dùng map để lấy thông tin của từng city */}
      {CityListData.map((item) => (
        <div key={item.id}>
          <img src={item.image} />
          <div className="content">
            <h2>{item.name}</h2>
            <p>{item.subText}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default City;
