import React, { Component } from "react";

const AboutGridItem = (props) => {
  return (
    <div className="wedding-grid-item-wrapper">
      <div className="grid-item">
        <div
          className="wedding-title"
          style={{
            backgroundImage: `url(${
              process.env.REACT_APP_IMAGE_BASE_URL + props.image
            })`,
          }}
        ></div>
        <div className="wedding-description">
          <h3>{props.title}</h3>
          {props.description?.map((x) => (
            <span className="d-block">{x}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutGridItem;
