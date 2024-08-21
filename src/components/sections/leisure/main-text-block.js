import React from 'react';
import { Link } from 'react-router-dom';
import { constants } from '../../../utils/constants';

const LeisureTitleBlock = ({ activeLang }) => {
  return (
    <div className="leisure-title-block">
      <div className="container">
        <h2>
          {constants?.site_content?.leisure_page?.text_block?.title[activeLang]}
        </h2>
        <p>
          {constants?.site_content?.leisure_page?.text_block?.detail[activeLang]}
        </p>
        <Link to="/files/experience-guide.pdf" download target="_blank">
          <button className="main-btn btn-filled">
            {constants?.site_content?.leisure_page?.text_block?.btn_txt[activeLang]}
          </button>
        </Link>

      </div>
    </div>
  );
}

export default LeisureTitleBlock;