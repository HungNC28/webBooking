import "./DetailItem.css";

const item = {
  name: "Tower Street Apartments",
  address: "Elton St 125 New york",
  distance: "Excellent location - 500m from center",
  price: "Book a stay over $114 at this property and get a free airport taxi",
  photos: [
    "./images/hotel_detail_1.jpg",
    "./images/hotel_detail_2.jpg",
    "./images/hotel_detail_3.jpg",
    "./images/hotel_detail_4.jpg",
    "./images/hotel_detail_5.jpg",
    "./images/hotel_detail_6.jpg",
  ],
  title: "Stay in the heart of City",
  description:
    "Located a 5-minute walk from St. Florian's Gate in Krakow, Tower Street Apartments has accommodations with air conditioning and free WiFi.The units come with hardwood floors and feature a fully equipped kitchenette with a microwave, a flat - screen TV, and a private bathroom with shower and a hairdryer.A fridge is also offered, as well as an electric tea pot and a coffee machine.Popular points of interest near the apartment include Cloth Hall, Main Market Square and Town Hall Tower.The nearest airport is John Paul II International Kraków - Balice, 16.1 km from Tower Street Apartments, and the property offers a paid airport shuttle service.",
  nine_night_price: 955,
};

const DetailItem = () => {
  return (
    <div className="detail_content">
      <div className="item_name">
        <div>
          <h2>{item.name}</h2>
          <p>{item.address}</p>
        </div>
        <button className="item_name_btn">Reserve or Book Now!</button>
      </div>
      <p className="item_distance">{item.distance}</p>
      <p className="item_price_text">{item.price}</p>
      <div className="item_img">
        {/*  dùng map để lấy các link từ photos */}
        {item.photos.map((e) => (
          <img key={e} src={e} />
        ))}
      </div>
      <div className="item_infor">
        <div className="item_description">
          <h2>{item.title}</h2>
          <p>{item.description}</p>
        </div>
        <div className="detail_item_price">
          <h3>Perfect for a 9-night stay!</h3>
          <p>
            Located in the real heart of Krakow, this property has excellent
            location score of 9.8!
          </p>
          <div className="nine_night_price">
            <p>${item.nine_night_price}</p>
            (9 nights)
          </div>
          <button className="item_price_btn">Reserve or Book Now!</button>
        </div>
      </div>
    </div>
  );
};

export default DetailItem;
