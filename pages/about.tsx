import { NextPage } from "next";
import About from "../components/About";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

const AboutPage: NextPage = () => {
  return (
    <div>
      <Navigation />
      <About />
      <Footer />
    </div>
  );
};

export default AboutPage;
