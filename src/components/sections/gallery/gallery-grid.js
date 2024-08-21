import React, { useState } from "react";
import RoomGridItem from "./gallery-grid-item";
import Lightbox from "react-image-lightbox";

const GalleryGrid = (props) => {
  const [mainSrc, setMainSrc] = useState(props.data?.[0]);
  const [showLightBox, setShowLightBox] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  // console.log("image gallery", props)
  return (
    <div className="container">
      {props.title && <h1 className="gallery-grid-title">{props.title}</h1>}
      <div className="gallery-grid-wrapper">
        {Object.values(props?.data)?.map((x, i) => (
          <RoomGridItem
            index={i}
            toggleLightBox={(index) => {
              setShowLightBox(!showLightBox);
              setPhotoIndex(index);
              setMainSrc(props.data?.[index]);
            }}
            title={x?.title}
            image={x?.url}
            link={x?.link}
            linkText={x?.linkText}
            description={x?.description}
          />
        ))}
      </div>
      {showLightBox && (
        <Lightbox
          mainSrc={process.env.REACT_APP_IMAGE_BASE_URL + mainSrc?.url}
          onCloseRequest={() => setShowLightBox(false)}
          nextSrc={props.data[(photoIndex + 1) % props.data.length]?.url}
          prevSrc={
            props.data[(photoIndex + props.data.length - 1) % props.data.length]
              ?.url
          }
          onMovePrevRequest={() => {
            setPhotoIndex(
              (photoIndex + props.data.length - 1) % props.data.length
            );
            setMainSrc(
              props.data[
                (photoIndex + props.data.length - 1) % props.data.length
              ]
            );
          }}
          onMoveNextRequest={() => {
            setPhotoIndex((photoIndex + 1) % props.data.length);
            setMainSrc(props.data[(photoIndex + 1) % props.data.length]);
          }}
        />
      )}
    </div>
  );
};

export default GalleryGrid;
