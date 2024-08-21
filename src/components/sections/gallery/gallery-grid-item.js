import React from 'react';
import { withRouter } from 'react-router-dom';

const GalleryGridItem = (props) => {

  return (
    <div className="gallery-grid-item-wrapper">
      <div className="grid-item" onClick={() => props.toggleLightBox(props?.index)}>
        <div className="gallery-title" style={{ backgroundImage: `url(${process.env.REACT_APP_IMAGE_BASE_URL + props?.image})`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
          <div className="slide-hover-overlay"></div>
        </div>
      </div>
    </div>
  );
}

export default withRouter(GalleryGridItem);
