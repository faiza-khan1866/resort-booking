import React from "react";
import { withRouter } from "react-router-dom";

const LeisureGridItem = (props) => {
  return (
    <div className="leisure-grid-item-wrapper">
      <div
        className="grid-item"
        onClick={() => props.history.push("leisure-inner")}
      >
        <div
          className="leisure-title"
          style={{
            backgroundImage: `url(${
              process.env.REACT_APP_IMAGE_BASE_URL + props.image
            })`,
            backgroundSize: "cover",
            backgroundPosition: "cover",
          }}
        >
          <h4>{props.title}</h4>
          <div className="slide-hover-overlay"></div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(LeisureGridItem);
