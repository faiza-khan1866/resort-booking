import React from "react";
import { constants } from "../../../utils/constants";
import { Link } from "react-router-dom";

const WeddingTitleBlock = (props) => {
  return (
    <div className="wedding-title-block">
      <div className="container">
        <h2 className="text-center">{props.intro?.section_name}</h2>
        <div className="d-flex flex-wrap title-flex">
          <div className="wedding-title-item">
            <div
              dangerouslySetInnerHTML={{ __html: props.intro?.section_content }}
              className="text-justify mr-sm-4 mb-2"
            ></div>
            <Link to="/files/FC-WeddingBrochure.pdf" download target="_blank">
              <button className="main-btn btn-eden mt-3">
                {
                  constants?.site_content?.weddings_page?.text_block?.btn_txt[
                    props?.activeLang
                  ]
                }
              </button>
            </Link>
          </div>
          <div className="wedding-title-item img-wrapper">
            <img
              alt=""
              src={require("./../../../assets/img/banner/wedding.jpg")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeddingTitleBlock;
