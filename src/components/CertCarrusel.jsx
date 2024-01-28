// CertificacionesCarousel.jsx

import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CertificacionesCarousel = ({ certificaciones }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings} className="certificacion-carousel">
      {certificaciones.map((certificacion, index) => (
        <CertificacionCard
          key={index}
          image={certificacion.image}
          title={certificacion.title}
          link={certificacion.link}
        />
      ))}
    </Slider>
  );
};

export default CertificacionesCarousel;
