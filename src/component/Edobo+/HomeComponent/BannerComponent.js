import React from "react";
import Slider from "react-slick";
import './Home.css'

const BannerComponent = (props) => {
  const {} = props;
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,

};

  return (
    <div className="container-lg my-4">
      <Slider {...settings}>
        <div className="banner-card"> 
          <img
            className="banner-img"
            src="https://ideogram.ai/assets/image/lossless/response/QTRjXYG4SQaSGOyQSo2LLw"
            
            alt="..."
          />
        </div>
        <div className="banner-card">
          <img
          className="banner-img"
            src="https://ideogram.ai/assets/image/lossless/response/FjGr4R9_QZGLuFO-Y6vbxQ"
        
            alt="..."
          />
        </div>
        {/* <div className="banner-card">
          <img
          className="banner-img"
            src="https://cdn1.storehippo.com/s/60a39f1801d30d79c4caa94b/64b64a10981db345e7607cb5/web-free-milk-3-days-2048x2048.png"
         
            alt="..."
          />
        </div> */}
        <div className="banner-card">
          <img
          className="banner-img"
            src="https://ideogram.ai/assets/image/lossless/response/eoaRTZdsT1mPbuQzi-t3PA"
     
            alt="..."
          />
        </div>
      </Slider>
    </div>
  );
};

export default BannerComponent;