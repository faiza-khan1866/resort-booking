import React from 'react';
import { Pannellum } from "pannellum-react";
import { constants } from '../../../utils/constants';

const RoomVR360 = (props) => {
  return (
    <div className="room-360-wrapper">
      <h3> {constants?.site_content?.roomsInner_page?.view_360?.title[props?.activeLang]} </h3>
      {
        props.image &&
        <Pannellum
          width="100%"
          height="350px"
          image={process.env.REACT_APP_IMAGE_BASE_URL + props.image}
          pitch={0}
          yaw={180}
          hfov={110}
          autoLoad
          onLoad={() => {
            console.log("360 Image Loaded");
          }}
        >
        </Pannellum>
      }
    </div>
  );
}

export default RoomVR360;