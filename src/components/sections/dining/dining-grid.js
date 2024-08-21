import React from 'react';
import RoomGridItem from './dining-grid-item';

const DiningGrid = (props) => {
  return (
    <div className='container'>
      {
        props.title && <h1 className="dining-grid-title">{props.title}</h1>
      }
      <div className='dining-grid-wrapper'>
        {
          props.data?.map(x => (
            <RoomGridItem key={x._id} id={x._id} route={x.slug} title={x.post_name} image={x.thumbnailPreview} link={x.link} linkText={x.linkText} description={x.post_content} />
          ))
        }
      </div>
    </div>
  );
}

export default DiningGrid;