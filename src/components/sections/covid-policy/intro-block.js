import React from 'react';

const CovidIntroBlock = (props) => {
  return (
    <div className="intro-block">
      <div className="container">
        <h2 className="text-center main-title">{props.data?.section_name}</h2>
        <div className="intro-item">
          <div dangerouslySetInnerHTML={{ __html: props.data?.section_content }}>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CovidIntroBlock;