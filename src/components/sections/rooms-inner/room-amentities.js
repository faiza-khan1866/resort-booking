import React from 'react';
import { constants } from "../../../utils/constants";

const RoomAmenities = ({ activeLang }) => {
  return (
    <div className="room-features clearfix">
      <div className="container">
        <h3 className="subtitle">
          {constants?.site_content?.roomsInner_page?.ammenities?.title[activeLang]}
        </h3>
        <ul className="room-features-list">
          {/* row 1 */}
          <li><span><i className="fal fa-bath" />
            {constants?.site_content?.roomsInner_page?.ammenities?.ammeniti1[activeLang]}
          </span></li>
          <li><span><i className="fal fa-shower" />
            {constants?.site_content?.roomsInner_page?.ammenities?.ammeniti2[activeLang]}
          </span></li>
          <li><span><i className="fab fa-chromecast" />
            {constants?.site_content?.roomsInner_page?.ammenities?.ammeniti3[activeLang]}
          </span></li>
          {/* row 2 */}
          <li><span><i className="fal fa-wifi" />
            {constants?.site_content?.roomsInner_page?.ammenities?.ammeniti4[activeLang]}
          </span></li>
          <li><span><i className="fal fa-key-skeleton" />
            {constants?.site_content?.roomsInner_page?.ammenities?.ammeniti5[activeLang]}
          </span></li>
          <li><span><i className="fal fa-megaphone" />
            {constants?.site_content?.roomsInner_page?.ammenities?.ammeniti6[activeLang]}
          </span></li>
          {/* row 3 */}
          <li><span><i className="fal fa-bolt" />
            {constants?.site_content?.roomsInner_page?.ammenities?.ammeniti7[activeLang]}
          </span></li>
          <li><span><i className="fal fa-phone" />
            {constants?.site_content?.roomsInner_page?.ammenities?.ammeniti8[activeLang]}
          </span></li>
          <li><span><i className="fal fa-hamburger" />
            {constants?.site_content?.roomsInner_page?.ammenities?.ammeniti9[activeLang]}
          </span></li>
          {/* row 4 */}
          <li><span><i className="fal fa-tv" />
            {constants?.site_content?.roomsInner_page?.ammenities?.ammeniti10[activeLang]}
          </span></li>
          <li><span><i className="fal fa-smoking-ban" />
            {constants?.site_content?.roomsInner_page?.ammenities?.ammeniti11[activeLang]}
          </span></li>
          <li><span><i className="fal fa-hotel" />
            {constants?.site_content?.roomsInner_page?.ammenities?.ammeniti12[activeLang]}
          </span></li>
          {/* row 5 */}
          <li><span><i className="fal fa-car-battery" />
            {constants?.site_content?.roomsInner_page?.ammenities?.ammeniti13[activeLang]}
          </span></li>
          <li><span><i className="fal fa-music" />
            {constants?.site_content?.roomsInner_page?.ammenities?.ammeniti14[activeLang]}
          </span></li>
          <li><span><i className="fal fa-coffee" />
            {constants?.site_content?.roomsInner_page?.ammenities?.ammeniti15[activeLang]}
          </span></li>
        </ul>
      </div>
    </div>
  );
}

export default RoomAmenities;