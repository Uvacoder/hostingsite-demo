import { NextPage } from "next";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import Pricing from "../components/Pricing";

const PricingPage: NextPage = () => {
  return (
    <div>
      <Navigation />
      {/* <div style = {{width:}}></div> */}
      <Pricing />
      <Footer />
    </div>
  );
};

export default PricingPage;
