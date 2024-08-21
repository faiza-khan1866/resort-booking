import React from 'react';
import RoomGridItem from './room-grid-item';

const RoomSuiteGrid = (props) => {
  return (
    <div className='container'>
      <h1 className="section-heading text-muted">{props.title}</h1>
      <div className='room-suite-grid-wrapper'>
        {
          props.data?.map(x => (
            <RoomGridItem key={x._id} id={x._id} title={x.post_name} image={x.thumbnailPreview} link={x.slug} linkText={x.linkText} description={x.short_description} url={x.slug} synx={x.post_url}
              activeLang={props?.activeLang}
            />
          ))
        }
      </div>
    </div>
  );
}

export default RoomSuiteGrid;