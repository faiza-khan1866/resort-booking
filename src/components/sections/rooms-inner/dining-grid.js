import React from 'react';

const RoomsInnerInfo = (props) => {
  return (
    <div className='rooms-info-wrapper'>
      <div className='container'>
        <div className="row">
          <div className="col-12 col-md-4">
            <div className="travellers-choice">
              <div className="image-wrapper">
                <img src={require('./../../../assets/img/travellers-choice.png')} alt="" />
              </div>
              <p className="info-title">opening hours</p>
              <p className="text-muted">Daily: <br /> 7pm - 11pm</p>
              <p className="text-muted font-italic">*Advance dinner reservations required</p>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="travellers-choice">
              <div className="image-wrapper">
                <img src={require('./../../../assets/img/travellers-choice.png')} alt="" />
              </div>
              <p className="info-title">dress code</p>
              <p className="text-muted">Daily: <br /> 7pm - 11pm</p>
              <p className="text-muted font-italic">*Advance dinner reservations required</p>
            </div>
          </div><div className="col-12 col-md-4">
            <div className="menu-buttons">
              <button className="main-btn btn-filled">Download our Menu</button>
              <button className="main-btn btn-filled">Download Beverage Menu</button>
              <button className="main-btn btn-filled">Download wine list</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RoomsInnerInfo;