import React, { Component } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import ReactWOW from "react-wow";
import { Hidden } from "@material-ui/core";
import { constants } from "../../../utils/constants";
import homeBannerDesktop from "../../../assets/img/banner/home-banner-desktop.jpg";
import homeBannerMobile from "../../../assets/img/banner/home-banner-mobile.jpg";

class Banner extends Component {
  render() {
    const settings = {
      infinite: true,
      autoplay: true,
      autoplaySpeed: 5000,
      dots: false,
      fade: true,
      arrows: false,
    };

    let currentRoute = window.location.pathname;
    let homePageURI = currentRoute.split("/")[2];

    let styles = "";
    if (homePageURI === undefined && this.props?.isMobile) {
      styles = {
        backgroundImage: `url(${homeBannerMobile})`,
        backgroundPosition: "left",
        backgroundSize: "cover",
      };
    } else if (homePageURI === "black-friday-sale" && this.props?.isMobile) {
      styles = {
        backgroundImage: `url(https://fisherman.b-cdn.net/black-friday/black-friday-mobile-banner-opt.jpg)`,
        backgroundPosition: "left",
        backgroundSize: "cover",
      };
    } else {
      styles = {
        backgroundImage: `url(${
          window.location.pathname == "/" ||
          window.location.pathname == "/en" ||
          window.location.pathname == "/fr" ||
          window.location.pathname == "/de" ||
          window.location.pathname == "/ru"
            ? homeBannerDesktop
            : process.env.REACT_APP_IMAGE_BASE_URL + this.props?.image
        })`,
        backgroundPosition: "left",
        backgroundSize: "cover",
      };
    }

    // let homePageClass;

    // if (homePageURI === undefined && this.props.isMobile) {
    //   homePageClass = true;
    // }
    // console.log("currentRoute", homePageClass);

    const bannerPosts = [
      {
        tag: "",
        taganimation: ".6s",
        title: "",
        subtitle: "",
        titleanimation: ".9s",
        btn1: `${
          constants?.site_content?.home_page?.banner?.btn1[
            this.props?.activeLang
          ]
        }`,
        btn1animation: "1.1s",
        btn1url: "/gallery",
        btn4: `${
          constants?.site_content?.home_page?.banner?.btn4[
            this.props?.activeLang
          ]
        }`,
        btn4animation: "1.3s",
        btn4url: "/offers",

        // btn3: `${
        //   constants?.site_content?.home_page?.banner?.btn3[
        //     this.props?.activeLang
        //   ]
        // }`,
        // btn3animation: "1.3s",
        // btn3url: "/",
      },
    ];

    return (
      <Slider
        className="banner-area banner-style-two"
        id="bannerSlider"
        {...settings}
      >
        {bannerPosts.map((item, i) => (
          <div
            key={i}
            className={`single-banner d-flex align-items-center justify-content-center ${
              this.props.isMain ? "" : "sub-banner"
            }`}
          >
            <div className="container">
              <div
                className={
                  homePageURI
                    ? `row justify-content-left`
                    : `row justify-content-left home-page-wrapper-row`
                }
              >
                <div className="col-10 col-lg-6">
                  <div className="banner-content text-left">
                    <ReactWOW
                      animation="fadeInDown"
                      data-delay={item.taganimation}
                    >
                      <span className="promo-tag">{item.tag}</span>
                    </ReactWOW>
                    <ReactWOW
                      animation="fadeInLeft"
                      data-delay={item.titleanimation}
                    >
                      <h1 className={homePageURI ? `title` : `title`}>
                        {this.props.title}
                      </h1>
                    </ReactWOW>
                    <ul className={this.props.isMain ? "" : "d-none"}>
                      <ReactWOW
                        animation="fadeInUp"
                        data-delay={item.btn1animation}
                      >
                        <li>
                          <Link
                            className="main-btn btn-border"
                            to={`/${this.props?.activeLang}${item.btn1url}`}
                          >
                            {item.btn1}
                          </Link>
                        </li>
                      </ReactWOW>

                      <Hidden>
                        <ReactWOW
                          animation="fadeInUp"
                          data-delay={item.btn4animation}
                        >
                          <li>
                            <Link
                              className="main-btn btn-border"
                              to={`/${this.props?.activeLang}${item.btn4url}`}
                            >
                              {item.btn4}
                            </Link>
                          </li>
                        </ReactWOW>
                      </Hidden>
                      <Hidden mdUp>
                        <ReactWOW
                          animation="fadeInUp"
                          data-delay={item.btn4animation}
                        >
                          {/* <li>
                            <Link
                              className="main-btn btn-border"
                              to={`/${this.props?.activeLang}${item.btn3url}`}
                              style={{
                                borderColor: "#be8a7d",
                                background: "#be8a7d",
                              }}
                              onClick={(e) => {
                                window.gtag_report_conversion(
                                  `${
                                    this.props?.activeLang === "en"
                                      ? "https://be.synxis.com/?&chain=27304&hotel=31842&locale=en-GB"
                                      : this.props?.activeLang === "fr"
                                      ? "https://be.synxis.com/?Hotel=31842&Chain=27304&locale=fr-FR"
                                      : this.props?.activeLang === "de"
                                      ? "https://be.synxis.com/?Hotel=31842&Chain=27304&locale=de-DE"
                                      : this.props?.activeLang === "ru"
                                      ? "https://be.synxis.com/?Hotel=31842&Chain=27304&locale=ru-RU"
                                      : "https://be.synxis.com/?&chain=27304&hotel=31842&locale=en-GB"
                                  }`
                                );
                              }}
                            >
                              {item.btn3}
                            </Link>
                          </li> */}
                        </ReactWOW>
                      </Hidden>
                    </ul>
                  </div>
                </div>
                <div
                  className={`d-none ${this.props.isMain ? "d-md-flex" : ""}`}
                  style={{
                    position: "absolute",
                    width: "50%",
                    display: "flex",
                    marginTop: "2rem",
                    alignItems: "baseline",
                    justifyContent: "flex-end",
                    right: "60px",
                    bottom: "68px",
                  }}
                >
                  <div
                    className="rounded-circle mx-2"
                    style={{
                      width: "100px",
                      height: "100px",
                      overflow: "hidden",
                      backgroundColor: "#fff",
                    }}
                  >
                    <img
                      alt=""
                      className="img-fluid"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                      src={require("./../../../assets/img/banner/tc-winner.gif")}
                    />
                  </div>
                  <div
                    className="rounded-circle mx-2"
                    style={{
                      width: "100px",
                      height: "100px",
                      overflow: "hidden",
                    }}
                  >
                    <img
                      alt=""
                      className="img-fluid"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "fill",
                      }}
                      src={require("./../../../assets/img/banner/luxury.png")}
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* banner bg */}

            <div
              className={
                this.props?.isMobile
                  ? `banner-bg ${currentRoute ? `` : `home-mobile-banner`}`
                  : `banner-bg`
              }
              style={styles}
            />
            <div className="banner-overly" />
          </div>
        ))}
      </Slider>
    );
  }
}

export default Banner;
