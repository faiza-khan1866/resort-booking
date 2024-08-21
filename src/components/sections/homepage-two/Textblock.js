import React, { Component } from "react";
import { Link } from "react-router-dom";
import ReactWOW from "react-wow";
import { constants } from "../../../utils/constants";

class Textblock extends Component {
  render() {
    return (
      <section className="text-block pt-100">
        <div className="container">
          <ReactWOW animation="fadeInLeft" data-wow-delay=".3s">
            <div className="row align-items-center1 justify-content-space-between">
              <div className="col-lg-6">
                <div className="text-img text-center text-lg-left mb-3 image-wrapper">
                  <img
                    // src={require("../../../assets/img/text-block/hotel.webp")}
                    src="https://fisherman.b-cdn.net/images/about-fcr.jpg"
                    alt="Fishermancove Resort"
                  />
                </div>
              </div>
              <ReactWOW animation="fadeInRight" data-wow-delay=".5s">
                <div className="col-lg-6 col-md-8 col-sm-10">
                  <div className="block-text h-100 d-flex flex-column justify-content-between align-items-start">
                    <div className="section-title mb-10">
                      <h1>
                        {
                          constants?.site_content?.home_page?.text_block?.title[
                            this.props?.activeLang
                          ]
                        }
                      </h1>
                    </div>
                    <p className="text-justify my-1">
                      {
                        constants?.site_content?.home_page?.text_block
                          ?.subtitle[this.props?.activeLang]
                      }
                      <br />
                      <br />
                      {
                        constants?.site_content?.home_page?.text_block?.detail[
                          this.props?.activeLang
                        ]
                      }
                    </p>
                    <Link
                      to={`/${this.props?.activeLang}/rooms-suites-seychelles`}
                      className="main-btn btn-nile mt-40"
                    >
                      {
                        constants?.site_content?.home_page?.banner?.btn2[
                          this.props?.activeLang
                        ]
                      }
                    </Link>
                  </div>
                </div>
              </ReactWOW>
            </div>
          </ReactWOW>
        </div>
      </section>
    );
  }
}

export default Textblock;
