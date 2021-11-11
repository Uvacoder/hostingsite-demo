import { NextPage } from "next";
import DomainSearch from "../components/DomainSearch";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

const SearchPage: NextPage = () => {
  return (
    <div style={{ backgroundColor: "#101214", height: "100vh" }}>
      <Navigation />
      <DomainSearch />
      <div style={{ backgroundColor: "#ff877f", height: "10%" }}></div>
      <Footer />
    </div>
  );
};

export default SearchPage;
