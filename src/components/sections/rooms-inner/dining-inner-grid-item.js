import React from "react";
import { withRouter } from "react-router-dom";

const OtherRecommendations = (props) => {
  // console.log("data", props?.data)
  return (
    <div className="rooms-recommendations-wrapper">
      <h2 className="section-heading text-muted">{props.title}</h2>
      <div className="container-fluid">
        <div className="row">
          {props?.data?.slice(0, 3).map((x, i) => (
            <div className="col-12 col-md-4 no-gutters px-2" key={i}>
              <div
                className="grid-item"
                onClick={() => props.history.push(`/${props?.activeLang}/rooms/${x.slug}`)}
              >
                <div
                  className="rooms-title"
                  style={{
                    backgroundImage: `url(${process.env.REACT_APP_IMAGE_BASE_URL + x.thumbnailPreview})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}
                >
                  <h4>{x.post_name}</h4>
                  <div className="slide-hover-overlay"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default withRouter(OtherRecommendations);
