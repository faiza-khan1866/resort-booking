import React from 'react';

const AboutTitleBlock = (props) => {
  return (
    <div className="about-title-block">
      <div className="container">
        <h2 className="text-center">{props.data?.section_name}</h2>
        <div className="d-flex flex-wrap title-flex">
          <div className="about-title-item">
            <div className="mr-sm-4 mb-2" dangerouslySetInnerHTML={{ __html: props.data?.section_content }}>
            </div>
          </div>
          <div className="about-title-item img-wrapper">
            <img alt="" src={process.env.REACT_APP_IMAGE_BASE_URL + props.data?.section_avatar?.url} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutTitleBlock;