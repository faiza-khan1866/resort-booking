import React from 'react';
import { constants } from '../../../utils/constants';

const SeychellesIntroBlock = (props) => {
  return (
    <div className="intro-block pb-4">
      <div className="container">
        <h2 className="text-center main-title">
          {constants?.site_content?.aboutSeychelles_page?.bread_crumb?.title2[props?.activeLang]}
        </h2>
        <div className="d-flex flex-wrap title-flex">
          <div className="intro-item">
            <h3 className=" mr-sm-4">
              {props.data?.section_name}
            </h3>
            <div className="text-justify mr-sm-4" dangerouslySetInnerHTML={{ __html: props.data?.section_content }}>

            </div>
          </div>
          <div className="intro-item img-wrapper">
            <img alt="" src={process.env.REACT_APP_IMAGE_BASE_URL + props.data?.section_avatar?.url} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SeychellesIntroBlock;