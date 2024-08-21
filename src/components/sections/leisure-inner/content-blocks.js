import React from 'react';
import { constants } from '../../../utils/constants';


const LeisureContentBlocks = ({ activities, activeLang }) => {
  return (
    <div className="content-blocks">
      <div className="container">
        <h2 className="text-center main-title">
          {constants?.site_content?.leisureInner_page?.text_block?.title[activeLang]}
        </h2>
        {
          Object.entries(activities)?.map(([key, x]) => (
            <div className="content-item">
              <div className="text-item">
                <h4>{x.section_name}</h4>
                <div dangerouslySetInnerHTML={{ __html: x.section_content }}></div>
              </div>
              <div className="image-item">
                <img className="img-thumbnail" src={process.env.REACT_APP_IMAGE_BASE_URL + x.section_avatar?.url} />
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default LeisureContentBlocks;