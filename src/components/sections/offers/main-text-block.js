import React from 'react';

const OfferTitleBlock = ({ title }) => {
  return (
    <div className="offer-title-block">
      <div className="container">
        <h2>
          {title}
        </h2>

      </div>
    </div>
  );
}

export default OfferTitleBlock;