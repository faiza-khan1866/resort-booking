import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import ReactWOW from "react-wow";
import { constants } from "../../../utils/constants";

class Experience extends Component {
  render() {
    const data = [
      {
        image: require("../../../assets/img/experience/sustaniablity.jpg"),
        title: `${
          constants?.site_content?.home_page?.experience?.data_title1[
            this.props?.activeLang
          ]
        }`,
        link: "/sustainability",
      },
      {
        image: require("../../../assets/img/experience/overview.jpg"),
        title: `${
          constants?.site_content?.home_page?.experience?.data_title2[
            this.props?.activeLang
          ]
        }`,
        link: "/about-us",
      },
      {
        image: require("../../../assets/img/experience/seychelles-min.jpg"),
        title: `${
          constants?.site_content?.home_page?.experience?.data_title3[
            this.props?.activeLang
          ]
        }`,
        link: "/about-seychelles",
      },
      {
        image: require("../../../assets/img/experience/contact.jpg"),
        title: `${
          constants?.site_content?.home_page?.experience?.data_title4[
            this.props?.activeLang
          ]
        }`,
        link: "/contact",
      },
    ];
    return (
      <section className="experience-wrapper">
        <h2 className="section-heading text-muted">
          {
            constants?.site_content?.home_page?.experience?.title[
              this.props?.activeLang
            ]
          }
        </h2>
        <ReactWOW animation="fadeInLeft" data-wow-delay=".3s">
          <div className="d-flex flex-row flex-wrap flex-sm-nowrap">
            {data.map((x) => (
              <div
                className="experience-item"
                onClick={() =>
                  this.props.history.push(`/${this.props?.activeLang}${x.link}`)
                }
              >
                <div className="background">
                  <img className="img-fluid w-100 h-100" src={x.image} alt="" />
                </div>
                <div className="foreground">
                  <h3>{x.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </ReactWOW>
      </section>
    );
  }
}

export default withRouter(Experience);
