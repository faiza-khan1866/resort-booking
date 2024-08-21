import React, { Component } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import $ from "jquery";
import { findDOMNode } from "react-dom";
import { constants } from "../../utils/constants";
import EnImg from "../../assets/img/icon/en.png";
import FrImg from "../../assets/img/icon/fr.png";
import DeImg from "../../assets/img/icon/de.png";
import RuImg from "../../assets/img/icon/ru.png";

class Headertwo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redText: false,
      isMobile: false,
      isTop: false,
    };
    this.addClass = this.addClass.bind(this);
    this.removeClass = this.removeClass.bind(this);
    this.removeAll = this.removeAll.bind(this);
  }

  //languagesssss

  onChangeLocale = (locale) => {
    const pathArray = window.location.pathname.split("/");
    const lang = "en";
    if (
      pathArray[1] &&
      (pathArray[1] == "en" ||
        pathArray[1] == "fr" ||
        pathArray[1] == "de" ||
        pathArray[1] == "ru")
    ) {
      if (pathArray[1] != locale) {
        let path = `/${locale}`;
        if (pathArray.length > 2) {
          for (let index = 2; index < pathArray.length; index++) {
            path += `/${pathArray[index]}`;
          }
        }
        if (window.location.search) {
          path += window.location.search;
        }
        window.location.replace(path);
      }
    } else {
      window.location.replace(`/${locale}`);
    }
  };

  async componentDidMount() {
    window.addEventListener(
      "resize",
      () => {
        this.setState({
          isMobile: window.innerWidth < 1020,
        });
      },
      false
    );
    window.addEventListener(
      "load",
      () => {
        this.setState({
          isMobile: window.innerWidth < 1020,
        });
      },
      false
    );
    window.addEventListener(
      "scroll",
      () => {
        this.setState({
          isTop: window.scrollY > 150,
        });
      },
      false
    );
  }

  toggleSubMenu = (text) => {
    this.setState({
      [text]: !this.state[text],
    });
  };
  addClass() {
    this.setState({
      redText: true,
    });
  }

  removeClass() {
    this.setState({
      redText: false,
    });
  }
  removeAll() {
    this.setState({
      redText: false,
    });
  }
  navToggle = () => {
    const nv = findDOMNode(this.refs.navmenu);
    const nvb = findDOMNode(this.refs.navbtn);
    $(nv).toggleClass("menu-on");
    $(nvb).toggleClass("active");
  };
  removenavToggle = () => {
    const nv = findDOMNode(this.refs.navmenu);
    const nvb = findDOMNode(this.refs.navbtn);
    $(nv).removeClass("menu-on");
    $(nvb).removeClass("active");
  };
  getNextSibling = function (elem, selector) {
    // Get the next sibling element
    var sibling = elem.nextElementSibling;

    // If there's no selector, return the first sibling
    if (!selector) return sibling;

    // If the sibling matches our selector, use it
    // If not, jump to the next sibling and continue the loop
    while (sibling) {
      if (sibling.matches(selector)) return sibling;
      sibling = sibling.nextElementSibling;
    }
  };

  render() {
    const className = this.props.isMobile ? "breakpoint-on" : "";
    const classNamess = this.props.isMobile ? "d-none" : "";
    const classNamesss = this.props.isTop ? "sticky-active" : "";
    const activeLang = localStorage.getItem("lang");

    return (
      <div>
        {/*====== HEADER START ======*/}
        <header
          className={`header-absolute header-two sticky-header ${classNamesss}`}
        >
          <div className="container container-custom-one">
            <div
              className={`nav-container container px-0 d-none d-sm-flex align-items-center justify-content-between ${className}`}
            >
              {/* Main Menu */}
              <div
                className="nav-menu d-lg-flex align-items-center"
                ref="navmenu"
              >
                {/* Navbar Close Icon */}
                <div className="navbar-close" onClick={this.removenavToggle}>
                  <div className="cross-wrap">
                    <span className="top" />
                    <span className="bottom" />
                  </div>
                </div>
                {/* Off canvas Menu  */}
                <div className="toggle" onClick={this.addClass}>
                  <Link to="#" id="offCanvasBtn">
                    <i className="fal fa-bars" />
                  </Link>
                </div>

                {/* Languages */}
                <div className="languageDropDown">
                  <div
                    onClick={() => this.onChangeLocale("en")}
                    className="hovertool"
                  >
                    <img
                      src={EnImg}
                      alt="en"
                      className="mr-2"
                      onClick={() => this.onChangeLocale("en")}
                    />
                    <span
                      className={`hovertooltiptext ${
                        activeLang === "en" && "active"
                      }`}
                    >
                      English
                    </span>
                  </div>
                  <div
                    className="hovertool"
                    onClick={() => this.onChangeLocale("fr")}
                  >
                    <img
                      src={FrImg}
                      alt="fr"
                      className="mr-2"
                      onClick={() => this.onChangeLocale("fr")}
                    />
                    <span
                      className={`hovertooltiptext ${
                        activeLang === "fr" && "active"
                      }`}
                    >
                      Français
                    </span>
                  </div>

                  <div
                    className="hovertool"
                    onClick={() => this.onChangeLocale("de")}
                  >
                    <img
                      src={DeImg}
                      alt="de"
                      className="mr-2"
                      onClick={() => this.onChangeLocale("de")}
                    />
                    <span
                      className={`hovertooltiptext ${
                        activeLang === "de" && "active"
                      }`}
                    >
                      Deutsch
                    </span>
                  </div>

                  <div
                    className="hovertool"
                    onClick={() => this.onChangeLocale("ru")}
                  >
                    <img
                      src={RuImg}
                      alt="ru"
                      className="mr-2"
                      onClick={() => this.onChangeLocale("ru")}
                    />
                    <span
                      className={`hovertooltiptext ${
                        activeLang === "ru" && "active"
                      }`}
                    >
                      Russian
                    </span>
                  </div>
                </div>

                {/* Mneu Items */}

                <div className="menu-items d-lg-none d-xl-none menuDisplay">
                  <ul>
                    {this.props.headerData
                      ?.find((x) => x.type === "header")
                      ?.menuItems?.map((x) =>
                        !x.subMenu?.length > 0 ? (
                          <li
                            className={`${
                              activeLang === "ru" ? "" : "text-capitalize"
                            }`}
                          >
                            <Link to={`/${activeLang}/${x.slug}`}>
                              {x.text}
                            </Link>
                          </li>
                        ) : (
                          <li>
                            <Link
                              to="#"
                              onClick={() => this.toggleSubMenu(x.text)}
                            >
                              {x.text} &nbsp;{" "}
                              <i
                                className={`far ${
                                  this.state[x.text] ? "fa-minus" : "fa-plus"
                                }`}
                              />
                            </Link>
                            <div
                              className={
                                "sidebar-submenu collapse" +
                                (this.state[x.text] ? " show" : "")
                              }
                            >
                              <ul>
                                <li key={"all"}>
                                  <Link
                                    to={`/${activeLang}/${x.slug}`}
                                    style={{ padding: "0px 0px 0 30px" }}
                                  >{`${x.text}`}</Link>
                                </li>
                                {x.subMenu?.map((y) => (
                                  <li key={y.id}>
                                    <Link
                                      to={`/${activeLang}/${y.base_url}/${y.slug}`}
                                      style={{ padding: "0px 0px 0 30px" }}
                                    >
                                      {y.text}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </li>
                        )
                      )}
                  </ul>
                </div>
                {/* from pushed-item */}
                <div className="nav-pushed-item" />
              </div>
              {/* Languages */}
              <div className="languageDropDownMbl">
                <div
                  onClick={() => this.onChangeLocale("en")}
                  className="hovertool"
                >
                  <img
                    src={EnImg}
                    alt="en"
                    className="mr-2"
                    onClick={() => this.onChangeLocale("en")}
                  />
                  <span
                    className={`hovertooltiptext ${
                      activeLang === "en" && "active"
                    }`}
                  >
                    English
                  </span>
                </div>
                <div
                  className="hovertool"
                  onClick={() => this.onChangeLocale("fr")}
                >
                  <img
                    src={FrImg}
                    alt="fr"
                    className="mr-2"
                    onClick={() => this.onChangeLocale("fr")}
                  />
                  <span
                    className={`hovertooltiptext ${
                      activeLang === "fr" && "active"
                    }`}
                  >
                    Français
                  </span>
                </div>

                <div
                  className="hovertool"
                  onClick={() => this.onChangeLocale("de")}
                >
                  <img
                    src={DeImg}
                    alt="de"
                    className="mr-2"
                    onClick={() => this.onChangeLocale("de")}
                  />
                  <span
                    className={`hovertooltiptext ${
                      activeLang === "de" && "active"
                    }`}
                  >
                    Deutsch
                  </span>
                </div>

                <div
                  className="hovertool"
                  onClick={() => this.onChangeLocale("ru")}
                >
                  <img
                    src={RuImg}
                    alt="ru"
                    className="mr-2"
                    onClick={() => this.onChangeLocale("ru")}
                  />
                  <span
                    className={`hovertooltiptext ${
                      activeLang === "ru" && "active"
                    }`}
                  >
                    Russian
                  </span>
                </div>
              </div>
              {/* <div className="deskVirtualBtn">
                <a
                  href="https://geckodigital.co/vt/FishermansCoveResort/"
                  className="virtual_tour"
                  target="_blank"
                >
                  Take a Virtual Tour
                </a>
              </div> */}
              {/* Site Logo */}
              <div className="site-logo">
                <Link to="/" className="main-logo">
                  <img
                    src={require("./../../assets/img/logo-fisher.png")}
                    alt="fishermans cove logo"
                  />
                </Link>
                <Link to="/" className="sticky-logo mt-1">
                  <img
                    src={require("./../../assets/img/scroll-logo.png")}
                    alt="fishermans cove logo"
                  />
                </Link>
              </div>
              {/* Header Info Passed To Menu Wrap */}
              <div className={`nav-push-item ${classNamess}`}>
                {/* Header Info */}
                <div className="header-info d-lg-flex flex-column ">
                  <div className="item d-lg-flex align-items-center ">
                    <>
                      <i className="fas fa-phone mr-2 d-inline-block" />
                      <a
                        href={`tel:${this.props.headerData
                          ?.find((x) => x.type === "header")
                          ?.contact?.phone?.replace(/\s+/g, "")}`}
                      >
                        <span className="title">
                          {
                            this.props.headerData?.find(
                              (x) => x.type === "header"
                            )?.contact?.phone
                          }
                        </span>
                      </a>
                    </>
                    <>
                      <i className="fab fa-whatsapp mx-2 d-inline-block" />
                      <a
                        href={`https://wa.me/${this.props.headerData
                          ?.find((x) => x.type === "header")
                          ?.contact?.phone?.replace("+", "")
                          .replace(/\s+/g, "")}`}
                      >
                        <span className="title">
                          {
                            this.props.headerData?.find(
                              (x) => x.type === "header"
                            )?.contact?.whatsapp
                          }
                        </span>
                      </a>
                    </>
                  </div>
                  <div className="item d-lg-flex align-items-center">
                    <i className="fas fa-envelope mr-2 d-inline-block" />
                    <a
                      href={`mailto:${
                        this.props.headerData?.find((x) => x.type === "header")
                          ?.contact?.email
                      }`}
                    >
                      <span className="title">
                        {
                          this.props.headerData?.find(
                            (x) => x.type === "header"
                          )?.contact?.email
                        }
                      </span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Navbar Toggler */}
              <div
                className="navbar-toggler"
                onClick={this.navToggle}
                ref="navbtn"
              >
                <span />
                <span />
                <span />
              </div>
            </div>
          </div>
        </header>
        {/*====== HEADER END ======*/}
        <div class="sticky_trip_button">
          <a
            href="https://geckodigital.co/vt/FishermansCoveResort/"
            className="virtual_tour_tag"
            target="_blank"
          >
            <img
              // src={require("./../../assets/img/virtualbtn.gif")}
              src="https://fisherman.b-cdn.net/Fisherman_PeacockBlue_GIF.gif"
              alt="virtual button"
            />
            {/* Take a Virtual Tour */}
          </a>
        </div>
        {/*====== OFF CANVAS START ======*/}
        <div
          className={classNames("offcanvas-wrapper", {
            "show-offcanvas": this.state.redText,
          })}
        >
          <div
            className={classNames("offcanvas-overly", {
              "show-overly": this.state.redText,
            })}
            onClick={this.removeAll}
          />
          <div className="offcanvas-widget">
            <Link to="#" className="offcanvas-close" onClick={this.removeClass}>
              <i className="fal fa-times" />
            </Link>

            <div className="widget nav-widget">
              <h5 className="widget-title">
                {constants?.site_content?.header_content?.explore[activeLang]}
              </h5>
              <ul>
                {this.props.headerData
                  ?.find((x) => x.type === "header")
                  ?.menuItems?.map((x) =>
                    !x.subMenu?.length > 0 ? (
                      <li
                        className={`${
                          activeLang === "ru" ? "" : "text-capitalize"
                        }`}
                      >
                        <Link to={`/${activeLang}/${x.slug}`}>{x.text}</Link>
                      </li>
                    ) : (
                      <li>
                        <Link to="#" onClick={() => this.toggleSubMenu(x.text)}>
                          {x.text} &nbsp;{" "}
                          <i
                            className={`far ${
                              this.state[x.text] ? "fa-minus" : "fa-plus"
                            }`}
                          />
                        </Link>
                        <div
                          className={
                            "sidebar-submenu collapse" +
                            (this.state[x.text] ? " show" : "")
                          }
                        >
                          <ul>
                            <li key={"all"}>
                              <Link
                                to={`/${activeLang}/${x.slug}`}
                              >{`${x.text}`}</Link>
                            </li>
                            {x.subMenu?.map((y) => (
                              <li key={y.id}>
                                <Link
                                  to={`/${activeLang}/${y.base_url}/${y.slug}`}
                                >
                                  {y.text}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </li>
                    )
                  )}
              </ul>
            </div>

            {/* Social Link */}
            <div className="widget social-link">
              <h5 className="widget-title">
                {constants?.site_content?.header_content?.follow[activeLang]}
              </h5>
              <ul>
                <li>
                  <a href="https://www.facebook.com/fishermanscoveresort/">
                    <i className="fab fa-facebook-f" />
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/fisherman_cove">
                    <i className="fab fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/fishermanscove.resort/">
                    <i className="fab fa-instagram" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Headertwo;
