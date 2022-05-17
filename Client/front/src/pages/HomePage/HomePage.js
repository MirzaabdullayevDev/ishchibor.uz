import React from "react";
import Header from "../../components/Header/Header";
import About from "./About/About";
import Category from "./Category/Category";
import "./HomePage.css";
import Masters from "./Masters/Masters";
import Steeps from "./Steeps/Steeps";
import Footer from "./Footer/Footer";

const HomePage = () => {
  return (
    <div>
      <Header />
      <Category />
      <Masters />
      <Steeps />
      <About />
      <Footer />
    </div>
  );
};

export default HomePage;
