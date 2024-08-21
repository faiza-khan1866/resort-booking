import React from "react";
import Slider from "react-slick";

const AboutOfferSlider = (props) => {
  const settings = {
    dots: false,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    accessibility: true,
    autoplay: true,
    centerMode: true,
    className: "center",
    centerPadding: "0px",
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };
  return (
    <div className="about-offer-slider container mx-auto">
      <h1 className="section-heading text-muted">{props.title}</h1>
      <Slider {...settings}>
        {props.data?.map((x) => (
          <a
            href={`${
              x?.post_name === "Book Now"
                ? `${x.post_url}`
                : `/${props?.activeLang}/${x.post_url}`
            }`}
          >
            <div>
              <div
                className="about-slider-item"
                style={{
                  backgroundImage: `url(${
                    process.env.REACT_APP_IMAGE_BASE_URL + x.banner_imgPreview
                  })`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              >
                <h3>{x.post_name}</h3>
                <div className="slide-hover-overlay"></div>
              </div>
            </div>
          </a>
        ))}
      </Slider>
    </div>
  );
};

export default AboutOfferSlider;
