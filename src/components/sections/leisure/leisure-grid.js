import React from "react";
import RoomGridItem from "./leisure-grid-item";

const LeisureGrid = ({ actData }) => {
  return (
    <div className="container">
      <div className="leisure-grid-wrapper">
        {Object.entries(actData)?.map(([key, x]) => (
          <RoomGridItem title={x.section_name} image={x.section_avatar?.url} />
        ))}
      </div>
    </div>
  );
};

export default LeisureGrid;
