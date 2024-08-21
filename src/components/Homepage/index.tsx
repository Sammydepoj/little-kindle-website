import React from "react";
import Navbar from "../Navbar";
import Hero from "../Hero";
import Footer from "../Footer";

const Homepage = () => {
  return (
    <section className="p-2 md:p-5">
      <Navbar />
      <Hero />
      <Footer />
    </section>
  );
};

export default Homepage;
