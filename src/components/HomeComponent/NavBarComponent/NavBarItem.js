import "./NavBarItem.css";

import navData from "../../../data/navBar.json";

const NavBarListData = [
  { id: 1, type: "Stays", icon: "fa-bed", active: true },
  { id: 2, type: "Flights", icon: "fa-plane", active: false },
  { id: 3, type: "Car rentals", icon: "fa-car", active: false },
  { id: 4, type: "Attractions", icon: "fa-bed", active: false },
  { id: 5, type: "Airport taxis", icon: "fa-taxi", active: false },
];

const NavBarItem = () => {
  return (
    <div className="navbar_list">
      {/* dùng map để lấy thông tin từng phần tử  */}
      {NavBarListData.map((item) => (
        <div
          key={item.id}
          // thêm class "active" nếu active:true
          className={`navbar_item ${item.active ? "active" : ""}`}
        >
          <i className={`fa ${item.icon}`}></i>
          {item.type}
        </div>
      ))}
    </div>
  );
};

export default NavBarItem;
