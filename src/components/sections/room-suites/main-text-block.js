import React from 'react';

const RoomTitleBlock = (props) => {
  return (
    <div className="room-title-block">
      <div className="container">
        <h2>
          {props.data?.section_name}
        </h2>
        <p dangerouslySetInnerHTML={{ __html: props.data?.section_content }}>
        </p>
      </div>
    </div>
  );
}

export default RoomTitleBlock;