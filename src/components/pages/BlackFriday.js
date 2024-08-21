import React, { Component } from "react";
import API from "../../langapi/http";
import OffersInnerMainBlock from "../sections/offers-inner/offers-inner-block";
import Helmet from "react-helmet";
import PageLayout from "../layouts/PageLayout";
import { constants } from "../../utils/constants";
import BlackFridayBlock from "../sections/offers-inner/black-friday-block";
import OtherRecommendations from "./../sections/rooms-inner/dining-inner-grid-item";
import BlackFridayRoomsSlider from "../sections/offers-inner/black-friday-rooms-slider";
const breadcrumbItems = [
  {
    text: "Fishermans Cove Resort",
    link: "/",
    isActive: false,
  },
  {
    text: "Black Offer",
    link: "/black-offer-sale",
    isActive: true,
  },
];

class BlackFriday extends Component {
  state = {
    rooms: [],
  };
  async componentDidMount() {
    // let id = this.props.match.params.id;
    let id = "10-percentage-off-dinner-for-two";

    try {
      // API.get(`/get_rooms_list?lang=en`)

      const activeLang = localStorage.getItem("lang");

      const response = await API.get(`/get_rooms_list?lang=en`);

      let data = response?.data?.data;
      console.log("data", data);
      this.setState({ rooms: data });
    } catch (error) {
      console.log(error);
    }
  }
  render() {
    const activeLang = localStorage.getItem("lang");

    return (
      <div className="bg-white offers-inner-wrapper">
        {/* <Helmet>
          <title>
            {this.state.offerData?.meta_title || "Fishermans Cove Resort"}
          </title>
          <meta
            name="description"
            content={this.state.offerData?.meta_description}
          />
        </Helmet> */}

        {this.state?.rooms ? (
          <PageLayout
            header={{ isMobile: this.props.isMobile, isTop: this.props.isTop }}
            banner={{
              title: "",
              image:
                // "https://fisherman.b-cdn.net/black-friday/Web%20banner%202.jpg",
                "https://fisherman.b-cdn.net/black-friday/black-friday-desktop-banner-opt.jpg",
              // "https://fisherman.b-cdn.net/black-friday/Web%20banner%2022.jpg",
            }}
            breadCrumb={{ items: breadcrumbItems }}
            activeLang="en"
          >
            {/*====== INTRO START ======*/}
            <BlackFridayBlock activeLang={activeLang} />

            <div className="row">
              <div className="col-md-12 text-center">
                <h1 class="section-heading">Our Rooms and Suites</h1>
                <BlackFridayRoomsSlider rooms={this.state?.rooms} />
              </div>
            </div>

            {/*====== INTRO END ======*/}
          </PageLayout>
        ) : (
          <div
            className={"preloader align-items-center justify-content-center"}
          >
            <div className="cssload-container">
              <div className="cssload-loading">
                <i />
                <i />
                <i />
                <i />
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default BlackFriday;
