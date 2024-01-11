import React from "react";
import Header from "./Header";
import Record from "./Record";
import Step from "./Step";
import Provider from "./Provider";
import { Wrap } from "./style";
import Teachers from "./Teachers";
import Questions from "./Questions";
import Testimonials from "./Testimonial";
import Footer from "../Footer";
import Courses from "./Courses";

const Home = () => {
  return (
    <Wrap>
      <Header />
      <Provider />
      <Courses />
      <Step />
      <Record />
      <Teachers />
      <Testimonials />
      <Questions />
      <Footer />
    </Wrap>
  );
};

export default Home;
