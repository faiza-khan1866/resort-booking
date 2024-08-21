import React from 'react';
import { withRouter } from 'react-router-dom';
import { constants } from '../../../utils/constants';

const RoomGridItem = (props) => {
  return (
    <div className="room-grid-item-wrapper" >
      <div className="grid-item">
        <div className="room-title" onClick={() => props.history.push(`/${props?.activeLang}/rooms/${props.link}`)} style={{ backgroundImage: `url(${process.env.REACT_APP_IMAGE_BASE_URL + props.image})`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
          <h3>{props.title}</h3>
          <a href={props.link}>{props.linkText}</a>
          <div className="slide-hover-overlay"></div>
        </div>
        <div className="room-description">
          <p dangerouslySetInnerHTML={{ __html: props.description }}></p>
          <button
            className="main-btn btn-filled"
            onClick={(e) => {
              e.preventDefault();
              window.gtag_report_conversion(props.synx, true)
            }
            }
          >
            {constants?.site_content?.rooms_page?.room_grid?.btn_text[props?.activeLang]}
          </button>
        </div>
      </div>
    </div>
  );
}

export default withRouter(RoomGridItem);