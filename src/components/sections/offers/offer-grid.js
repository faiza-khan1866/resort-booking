import React from "react";
import { Link } from "react-router-dom";
import RoomGridItem from "./offer-grid-item";

const OfferGrid = (props) => {
  return (
    <div className="container">
      {props.title && <h1 className="offer-grid-title">{props.title}</h1>}
      <div className="offer-grid-wrapper">
        {props.data?.map((x, index) => (
          <RoomGridItem
            key={index}
            id={x._id}
            route={x.slug}
            title={x.post_name}
            thumbnail={x.thumbnailPreview}
            banner={x.banner_img}
            link={x.link}
            linkText={x.linkText}
            description={x.short_description}
          />
        ))}

        {/* Black friday sale thumbnail */}
        {/* <div className="offer-grid-item-wrapper">
          <Link
            className="grid-item black-friday-div-width"
            to="black-friday-sale"
          >
            <div
              className="offer-title"
              style={{
                backgroundImage: `url(https://fisherman.b-cdn.net/black-friday/black-offer-thumbnail.jpg)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <h4>Black Friday Sale </h4>
              <div className="slide-hover-overlay"></div>
            </div>
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default OfferGrid;
