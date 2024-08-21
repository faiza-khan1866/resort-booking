import React from 'react';
import RoomGridItem from './wedding-grid-item';

const WeddingGrid = (props) => {
  return (
    <div className='container'>
      <h2 className="section-heading text-muted">{props.title}</h2>
      <div className='wedding-grid-wrapper'>
        {
          props.data?.map(x => (
            <RoomGridItem title={x.name} image={x.thumbnailPreview} link={x.slug || ""} linkText={x.linkText || ""} description={x.detailed_content} />
          ))
        }
      </div>
    </div>
  );
}

export default WeddingGrid;