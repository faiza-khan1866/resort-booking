import React from 'react';
import { Carousel } from 'react-responsive-carousel';

const DiningInnerTitleBlock = (props) => {
  return (
    <div className="dining-inner-title-block">
      <div className="container">
        <div className="intro-block">
          <div className="description-item">
            <h2>{props.dining?.post_name}</h2>
            <p dangerouslySetInnerHTML={{ __html: props.dining?.post_content }}>
            </p>
          </div>
          <div className="slider-item">
            <Carousel
              dynamicHeight={false}
              showStatus={false}
              showArrows={true}
              showIndicators={false}
              showThumbs={false}
              infiniteLoop={true}
              autoPlay={true}
              emulateTouch={true}
              className="dining-carousel"
            >
              {
                props.dining?.images_list && JSON.parse(props.dining?.images_list)?.map((x, i) => (
                  <div key={x.id}>
                    <img src={process.env.REACT_APP_IMAGE_BASE_URL + x.url} alt="" />
                  </div>
                ))
              }
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DiningInnerTitleBlock;