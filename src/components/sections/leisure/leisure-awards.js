import React from 'react';
import { constants } from '../../../utils/constants';
const LeisureAwards = ({ activeLang, award }) => {
  return (
    <div className="leisure-awards-wrapper">
      <div className="container">
        <h2 className="section-heading">
          {constants?.site_content?.leisure_page?.award_sec?.title[activeLang]}
        </h2>
        <div className="row justify-content-center">
          {
            Object.entries(award)?.map(([key, x]) => (
              <div className="col-6 col-md-3">
                <div className="award-image-wrapper">
                  <img src={process.env.REACT_APP_IMAGE_BASE_URL + x.section_avatar?.url} alt="sustain" />
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default LeisureAwards;