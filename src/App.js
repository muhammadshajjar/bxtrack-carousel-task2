import React, { useRef } from "react";
import Card from "./components/Card";
import "./App.css";

//slider https://react-slick.neostack.com/

import Slider from "react-slick";

import { ROOMS } from "./data/rooms";
import CustomBtn from "./components/CustomBtn";
const App = () => {
  const slider = useRef(null);
  const settings = {
    dots: true,
    infinite: true,
    speed: 900,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    centerPadding: "10px",
    responsive: [
      {
        breakpoint: 1150,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 830,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <main style={{ backgroundColor: "#F4F4EF", padding: "50px 0px 80px 0px" }}>
      <div className="container">
        <section className="carouselSection">
          <div className="content">
            <div className="contentInfo">
              <h2>Rooms</h2>
              <p>Made for sophisticarted relaxation</p>
            </div>
            <CustomBtn slider={slider} />
          </div>
          <Slider ref={slider} {...settings}>
            {ROOMS.map((item) => (
              <Card item={item} />
            ))}
          </Slider>
        </section>
      </div>
    </main>
  );
};

export default App;
