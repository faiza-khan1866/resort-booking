import React from 'react';

const DiningTitleBlock = (props) => {
  return (
    <div className="dining-title-block">
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

export default DiningTitleBlock;