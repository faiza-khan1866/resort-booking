import React from "react";

const SustainProjectsBlock = (props) => {
  return (
    <div className="projects-block py-4">
      <div className="container">
        <div className="d-flex flex-wrap title-flex">
          <div className="projects-item  pr-sm-4">
            <h3 className="">{props.data?.section_name}</h3>
            <div
              dangerouslySetInnerHTML={{ __html: props.data?.section_content }}
            ></div>
          </div>
          <div className="projects-item img-wrapper">
            <img
              alt=""
              className="img-thumbnail"
              src={
                process.env.REACT_APP_IMAGE_BASE_URL +
                props.data?.section_avatar?.url
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SustainProjectsBlock;
