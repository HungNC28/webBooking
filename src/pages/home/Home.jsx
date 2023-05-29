import NavBar from "../../components/HomeComponent/NavBarComponent/NavBar";
import Header from "../../components/HomeComponent/HeaderComponent/Header";
import City from "../../components/HomeComponent/CityComponent/City";
import TypeHotel from "../../components/HomeComponent/TypeHotelComponent/TypeHotel";
import Hotel from "../../components/HomeComponent/HotelComponent/Hotel";
import Form from "../../components/HomeComponent/FormComponent/Form";
import Footer from "../../components/HomeComponent/FooterComponent/Footer";

const Home = () => {
  return (
    <div>
      <NavBar />
      <Header />
      <City />
      <TypeHotel />
      <Hotel />
      <Form />
      <Footer />
    </div>
  );
};

export default Home;
