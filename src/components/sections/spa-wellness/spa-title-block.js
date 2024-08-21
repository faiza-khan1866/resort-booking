import React from 'react';
import { Link } from 'react-router-dom';
import { constants } from '../../../utils/constants';

const SpaWellnessTitleBlock = (props) => {
  return (
    <div className="projects-block">
      <div className="container">
        <div className="d-flex flex-wrap title-flex">
          <div className="projects-item">
            <h2 className=" mr-sm-4">{props.data?.section_name}</h2>
            <div dangerouslySetInnerHTML={{ __html: props.data?.section_content }}>
            </div>
            <Link to="/files/Spa-Pricelist-2020-November.pdf" download target="_blank">
              <button className="main-btn btn-eden">
                {constants?.site_content?.spawellness_page?.text_block?.btn_txt[props?.activeLang]}
              </button>
            </Link>
          </div>
          <div className="projects-item img-wrapper">
            <img alt="" src={process.env.REACT_APP_IMAGE_BASE_URL + props.data?.section_avatar?.url} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SpaWellnessTitleBlock;