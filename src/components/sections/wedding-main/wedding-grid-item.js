import React from 'react';

const WeddingGridItem = (props) => {
  return (
    <div className="wedding-grid-item-wrapper">
      <div className="grid-item">
        <div className="wedding-title" style={{ backgroundImage: `url(${process.env.REACT_APP_IMAGE_BASE_URL + props.image})` }}>
          <div className="slide-hover-overlay"></div>
        </div>
        <div className="wedding-description">
          <h4 className="mb-2">{props.title}</h4>
          <div dangerouslySetInnerHTML={{ __html: props.description }}></div>
          <div className="clearfix"></div>
        </div>
      </div>
    </div>
  );
}

export default WeddingGridItem;