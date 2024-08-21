import React from 'react';
import { constants } from '../../../utils/constants';

const GalleryTitleBlock = ({ activeLang }) => {
  return (
    <div className="gallery-title-block">
      <div className="container">
        <h2>
          {constants?.site_content?.gallery_page?.bread_crumb?.title2[activeLang]}
        </h2>
      </div>
    </div>
  );
}

export default GalleryTitleBlock;