import NavBar from "../../components/HomeComponent/NavBarComponent/NavBar";
import SearchPopup from "../../components/SearchComponent/SearchPopupComponent/SearchPopup";
import SearchList from "../../components/SearchComponent/SearchListComponent/SearchList";
import "./Search.css";
import Footer from "../../components/HomeComponent/FooterComponent/Footer";
import Form from "../../components/HomeComponent/FormComponent/Form";
const Search = () => {
  return (
    <div>
      <NavBar />
      <div className="search_component">
        <SearchPopup />
        <SearchList />
      </div>
      <Form />
      <Footer />
    </div>
  );
};

export default Search;
