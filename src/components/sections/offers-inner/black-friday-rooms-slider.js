import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";

const BlackFridayRoomsSlider = (props) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="black-offer-inner-title-block">
      <div className="container-fluid">
        <div className="intro-block">
          <div className="slider-item">
            <Carousel
              responsive={responsive}
              swipeable={true}
              showDots={false}
              arrows={true}
              ssr={true}
              infinite={false}
              draggable={true}
              autoPlay={false}
              autoPlaySpeed={3000}
              keyBoardControl={true}
              customTransition="all .5s"
              transitionDuration={500}
              containerClass="carousel-container"
              dotListClass="custom-dot-list-style"
              itemClass="listStyle container-fluid pb-4"
            >
              {props?.rooms &&
                props?.rooms?.map((x, i) => (
                  <div key={x?.id} className="item">
                    <img src={process.env.REACT_APP_IMAGE_BASE_URL + x?.thumbnailPreview} alt="" />
                    <h5 className="py-2">
                      <Link to={`rooms/${x?.route}`}>{x?.post_name}</Link>
                    </h5>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: x?.short_description,
                      }}
                    ></p>
                    <button
                      className="main-btn btn-eden my-4"
                      onClick={(e) => {
                        e.preventDefault();
                        window.gtag_report_conversion(x.post_url, true);
                      }}
                    >
                      Book Now
                    </button>
                  </div>
                ))}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlackFridayRoomsSlider;
