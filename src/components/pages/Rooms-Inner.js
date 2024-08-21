import React, { Component } from "react";
import OtherRecommendations from "../sections/rooms-inner/dining-inner-grid-item";
import RoomsInnerTitleBlock from "../sections/rooms-inner/main-text-block";
import RoomAmenities from "../sections/rooms-inner/room-amentities";
import RoomVR360 from "../sections/rooms-inner/room-360";
import BookingFormVertical from "../sections/rooms-inner/BookingFormVertical";
import API from '../../langapi/http';
import PageLayout from "../layouts/PageLayout";
import { Helmet } from "react-helmet";
import FAQInnerSection from "../sections/common/FAQInnerSection";
import { constants } from "../../utils/constants";


const breadcrumbItems = [
  {
    text: "Fishermans Cove Resort",
    link: "/",
    isActive: false,
  },
  {
    text: "Rooms & Suites",
    link: "/rooms-suites-seychelles",
    isActive: false,
  },
  {
    text: "",
    link: "/rooms",
    isActive: true,
  },
];

class RoomsInner extends Component {
  state = {
    singleRoom: {},
    othersData: [],
    faqsData: []
  };

  async componentDidMount() {
    let id = this.props.match.params.id;
    try {
      //getting single post data
      const activeLang = localStorage.getItem('lang');

      const response = await API.get(`/get_single_room/${id}?lang=${activeLang}`);
      //making breadcrumbs dynamic, appending into last item
      breadcrumbItems[breadcrumbItems.length - 2].text =
        constants?.site_content?.rooms_page?.bread_crumb?.title2[activeLang];
      breadcrumbItems[breadcrumbItems.length - 1].text =
        response.data?.room?.post_name;
      breadcrumbItems[breadcrumbItems.length - 1].link =
        "/rooms/" + response.data?.room?.slug;

      let singleRoom = response.data?.room;

      singleRoom.roomCode = singleRoom?.post_url?.split("room=")[1];

      this.setState({ singleRoom });

      let faqsData = response.data?.faqs;

      this.setState({ faqsData });

      let othersData = response.data?.related;

      this.setState({ othersData });

    } catch (error) {
      console.log(error);
    }
  }

  async componentDidUpdate(prevProps) {
    if (this.props.match.params.id !== prevProps.match.params.id) {
      let id = this.props.match.params.id;
      try {
        const activeLang = localStorage.getItem('lang');

        //getting single room data
        const response = await API.get(`/get_single_room/${id}?lang=${activeLang}`);
        //making breadcrumbs dynamic, appending into last item
        breadcrumbItems[breadcrumbItems.length - 2].text =
          constants?.site_content?.rooms_page?.bread_crumb?.title2[activeLang];
        breadcrumbItems[breadcrumbItems.length - 1].text =
          response.data.room.post_name;
        breadcrumbItems[breadcrumbItems.length - 1].link =
          "/rooms/" + response.data.room.slug;

        let singleRoom = response.data?.room;

        singleRoom.roomCode = singleRoom?.post_url?.split("room=")[1];

        this.setState({ singleRoom });

        let faqsData = response.data?.faqs;

        this.setState({ faqsData });

        let othersData = response.data?.related;

        this.setState({ othersData });

      } catch (error) {
        console.log(error);
      }
    }
  }

  render() {
    const activeLang = localStorage.getItem('lang');
    return (
      <div className="bg-white rooms-inner-wrapper">
        <Helmet>
          <title>
            {
              this.state.singleRoom?.meta_title || "Fishermans Cove Resort"
            }
          </title>
          <meta name="description" content={this.state.singleRoom?.meta_description} />

        </Helmet>
        {
          this.state.singleRoom?.banner_imgPreview ?
            <PageLayout
              header={{ isMobile: this.props.isMobile, isTop: this.props.isTop }}
              banner={{
                title: this.state.singleRoom?.post_name,
                image: this.state.singleRoom?.banner_imgPreview,
              }}
              breadCrumb={{ items: breadcrumbItems }}
              hideBooking
              key={this.state.singleRoom?.post_name}
              activeLang={activeLang}
            >
              <div className="container">
                <div className="row">
                  <div className="col-md-8 left-image-section">
                    {/*====== TITLE START ======*/}
                    <RoomsInnerTitleBlock room={this.state.singleRoom} />
                    {/*====== TITLE END ======*/}
                    {/*====== ROOM GRID START ======*/}
                    <RoomAmenities
                      activeLang={activeLang}
                    />
                    {/*====== ROOM GRID END ======*/}
                    {/*====== ROOM 360 GRID START ======*/}
                    <RoomVR360
                      image={this.state.singleRoom?.images_list && JSON.parse(this.state.singleRoom?.images_list)?.find((x) => x["is360"] === "true")?.url}
                      activeLang={activeLang}
                    />
                    {/*====== ROOM 360 GRID END ======*/}
                  </div>
                  <div className="col-md-4 right-booking-section">
                    <BookingFormVertical
                      roomCode={this.state.singleRoom?.roomCode}
                    />
                  </div>
                </div>
                {/*====== OTHERS GRID START ======*/}
                <OtherRecommendations
                  title={constants?.site_content?.roomsInner_page?.other_recom?.title[activeLang]}
                  data={this.state.othersData}
                  activeLang={activeLang}
                />
                {/*====== OTHERS GRID END ======*/}
              </div>
              <FAQInnerSection
                // faqList={this.state.faqsData.filter((x) => x.innerpage === this.state.singleRoom?.slug)}
                faqList={this.state.faqsData}
                activeLang={activeLang}
              />
            </PageLayout>
            :
            <div className={"preloader align-items-center justify-content-center"}>
              <div className="cssload-container">
                <div className="cssload-loading"><i /><i /><i /><i /></div>
              </div>
            </div>
        }
      </div>
    );
  }
}

export default RoomsInner;
