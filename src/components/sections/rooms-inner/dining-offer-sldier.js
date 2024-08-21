import React from 'react';
import Slider from "react-slick";

const RoomsInnerOfferSlider = (props) => {
  const settings = {
    dots: false,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    accessibility:true,
    autoplay:true
  };
  return (
    <div className="rooms-offer-slider container mx-auto">
      <h1 className="rooms-grid-title">{props.title}</h1>
      <Slider {...settings}>
        {
          props.data?.map(x => (
            <div>
              <div className="rooms-slider-item" style={{ backgroundImage: `url(${process.env.REACT_APP_IMAGE_BASE_URL + x.image})` }}>
                <h2>{x.title}</h2>
              </div>
            </div>
          ))
        }
      </Slider>
    </div>
  );
}

export default RoomsInnerOfferSlider;