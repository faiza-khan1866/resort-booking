import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { constants } from "../../../utils/constants";

// const currentPage = window.location.pathname.split("/");

const DiningInnerInfo = (props) => {
  const { id: currentPath } = useParams();

  console.log("current page", currentPath);

  let menus = props?.menuPdf.filter((x) => x.route === currentPath);

  return (
    <div className="dining-info-wrapper">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-4">
            <div className="travellers-choice">
              <p className="info-title">
                {
                  constants?.site_content?.dinningInner_page?.diningInner_Info
                    ?.dress_code[props?.activeLang]
                }
              </p>
              <div dangerouslySetInnerHTML={{ __html: props.dress_code }}></div>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="travellers-choice">
              <p className="info-title">
                {
                  constants?.site_content?.dinningInner_page?.diningInner_Info
                    ?.opening_hours[props?.activeLang]
                }
              </p>
              <div
                dangerouslySetInnerHTML={{ __html: props.opening_hours }}
              ></div>
            </div>
          </div>

          <div className="col-12 col-md-4">
            {/* {props.menuPdf?.map(
              (x, i) =>
                x.route === currentPage[3] && ( */}
            {menus && (
              <div className="menu-buttons">
                <a
                  href={menus[0].ourMainMenu}
                  className={menus[0].ourMainMenu === "" ? "pdf_btn_hide" : ""}
                  without
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {
                    constants?.site_content?.dinningInner_page?.diningInner_Info
                      ?.our_menu[props?.activeLang]
                  }
                </a>
                <a
                  href={menus[0].nightMenu}
                  className={menus[0].nightMenu === "" ? "pdf_btn_hide" : ""}
                  without
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {
                    constants?.site_content?.dinningInner_page?.diningInner_Info
                      ?.night_menu[props?.activeLang]
                  }
                </a>
                <a
                  href={menus[0].beverageMenu}
                  className={menus[0].beverageMenu === "" ? "pdf_btn_hide" : ""}
                  without
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {
                    constants?.site_content?.dinningInner_page?.diningInner_Info
                      ?.beverage_menu[props?.activeLang]
                  }
                </a>
                <a
                  href={menus[0].wineList}
                  className={menus[0].wineList === "" ? "pdf_btn_hide" : ""}
                  without
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {
                    constants?.site_content?.dinningInner_page?.diningInner_Info
                      ?.Wine_list[props?.activeLang]
                  }
                </a>
                <a
                  href={menus[0].inRoomDining}
                  className={menus[0].inRoomDining === "" ? "pdf_btn_hide" : ""}
                  without
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {
                    constants?.site_content?.dinningInner_page?.diningInner_Info
                      ?.room_dining[props?.activeLang]
                  }
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiningInnerInfo;
