import React, { Component } from "react";
import DiningInnerTitleBlock from "../sections/dining-inner/main-text-block";
import DiningInnerInfo from "../sections/dining-inner/dining-grid";
import OtherRecommendations from "../sections/dining-inner/dining-inner-grid-item";
import PageLayout from "../layouts/PageLayout";
import FAQInnerSection from "../sections/common/FAQInnerSection";
import { constants } from "../../utils/constants";
import API from "../../langapi/http";
import { Helmet } from "react-helmet";

const SunsetBarBeverageMenu = "Sunset Bar Menu-07-28-2021.pdf";
const FCRWineListUPDATED = "FCR_Wine List 05-19-2022.pdf";
const FCRInRoomDiningMenuWITHPRICING = "FCR In-Room Dining 12 March 2022.pdf";
const ParisSeychellesMainMenu = "FCR Paris Seyshelles FR A4.pdf";
const LeCocolobaFoodMenu = "Le Cocoloba Bar Food Menu 20.05.22.pdf";
const LeCocolobaBarDrinksMenu = "Le Cocoloba Bar Drinks Menu 31 July 2021.pdf";
const LeCardinalBreakfastMenu = "Le Cardinal Breakfast Menu.pdf";
const activeLang = localStorage.getItem("lang");

const menuPdf = [
  {
    route: "sunset-bar",
    beverageMenu: `https://fisherman.b-cdn.net/pdf-menus/${SunsetBarBeverageMenu}`,
    ourMainMenu: "",
    nightMenu: "",
    wineList: `https://fisherman.b-cdn.net/pdf-menus/new/${FCRWineListUPDATED}`,
    inRoomDining: `https://fisherman.b-cdn.net/pdf-menus/${FCRInRoomDiningMenuWITHPRICING}`,
  },
  {
    route: "paris-seychelles-restaurant",
    beverageMenu: "",
    ourMainMenu: `https://fisherman.b-cdn.net/pdf-menus/${ParisSeychellesMainMenu}`,
    nightMenu: "",
    wineList: `https://fisherman.b-cdn.net/pdf-menus/new/${FCRWineListUPDATED}`,
    inRoomDining: `https://fisherman.b-cdn.net/pdf-menus/${FCRInRoomDiningMenuWITHPRICING}`,
  },
  {
    route: "le-cocoloba-bar",
    beverageMenu: `${
      activeLang == "fr"
        ? "https://fisherman.b-cdn.net/pdf-menus/FCR%20Le%20Colobo%20Bar_FR.pdf"
        : ""
    }`,
    ourMainMenu: `https://fisherman.b-cdn.net/pdf-menus/${LeCocolobaFoodMenu}`,
    nightMenu: "",
    wineList: `https://fisherman.b-cdn.net/pdf-menus/${LeCocolobaBarDrinksMenu}`,
    inRoomDining: `https://fisherman.b-cdn.net/pdf-menus/${FCRInRoomDiningMenuWITHPRICING}`,
  },
  {
    route: "le-cardinal-restaurant",
    beverageMenu: "",
    ourMainMenu: `https://fisherman.b-cdn.net/pdf-menus/${LeCardinalBreakfastMenu}`,
    nightMenu: `${
      activeLang == "fr"
        ? "/files/ThemedNightsbuffetFR.pdf"
        : "/files/ThemedNightsENG.pdf"
    }`,
    wineList: `https://fisherman.b-cdn.net/pdf-menus/new/${FCRWineListUPDATED}`,
    inRoomDining: `https://fisherman.b-cdn.net/pdf-menus/${FCRInRoomDiningMenuWITHPRICING}`,
  },
];

let breadcrumbItems = [
  {
    text: "Fishermans Cove Resort",
    link: "/",
    isActive: false,
  },
  {
    text: "Dining",
    link: "/fine-dining-seychelles",
    isActive: false,
  },
  {
    text: "",
    link: "/dining",
    isActive: true,
  },
];

class DiningInner extends Component {
  state = {
    singleHotel: {},
    othersData: [],
    sections: null,
    faqsData: [],
  };

  async componentDidMount() {
    window.gtag("config", "AW-470789889");
    window.gtag("event", "conversion", {
      send_to: "AW-470789889/D9SvCK_PoYYYEIHevuAB",
    });

    let id = this.props.match.params.id;

    try {
      const activeLang = localStorage.getItem("lang");

      const response = await API.get(
        `/get_single_dining/${id}?lang=${activeLang}`
      );
      let singleHotel = response.data?.dining;
      breadcrumbItems[breadcrumbItems.length - 2].text =
        constants?.site_content?.dinning_page?.bread_crumb?.title2[activeLang];
      breadcrumbItems[breadcrumbItems.length - 1].text = singleHotel.post_name;
      breadcrumbItems[breadcrumbItems.length - 1].link =
        "/dining/" + singleHotel.slug;

      this.setState({ singleHotel });

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
        const activeLang = localStorage.getItem("lang");

        const response = await API.get(
          `/get_single_dining/${id}?lang=${activeLang}`
        );
        let singleHotel = response.data?.dining;
        breadcrumbItems[breadcrumbItems.length - 2].text =
          constants?.site_content?.dinning_page?.bread_crumb?.title2[
            activeLang
          ];
        breadcrumbItems[breadcrumbItems.length - 1].text =
          singleHotel.post_name;
        breadcrumbItems[breadcrumbItems.length - 1].link =
          "/dining/" + singleHotel.slug;

        this.setState({ singleHotel });

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
    const activeLang = localStorage.getItem("lang");
    return (
      <div className="bg-white dining-inner-wrapper">
        <Helmet>
          <title>
            {this.state.singleHotel?.meta_title || "Fishermans Cove Resort"}
          </title>
          <meta
            name="description"
            content={this.state.singleHotel?.meta_description}
          />
        </Helmet>
        {this.state.singleHotel?.banner_imgPreview ? (
          <PageLayout
            header={{ isMobile: this.props.isMobile, isTop: this.props.isTop }}
            banner={{
              title: this.state.singleHotel?.post_name,
              image: this.state.singleHotel?.banner_imgPreview,
            }}
            breadCrumb={{ items: breadcrumbItems }}
            key={this.state.singleHotel?.post_name}
            activeLang={activeLang}
          >
            {/*====== TITLE START ======*/}
            <DiningInnerTitleBlock dining={this.state.singleHotel} />
            {/*====== TITLE END ======*/}
            {/*====== ROOM GRID START ======*/}
            <DiningInnerInfo
              timingSection={this.state.sections?.timings}
              opening_hours={this.state.singleHotel?.section_opening_hours}
              dress_code={this.state.singleHotel?.section_dress_code}
              menuPdf={menuPdf}
              activeLang={activeLang}
            />

            {/*====== OTHERS GRID START ======*/}
            <OtherRecommendations
              title={
                constants?.site_content?.dinningInner_page?.other_recom?.title[
                  activeLang
                ]
              }
              data={this.state.othersData}
              activeLang={activeLang}
            />
            {/*====== OTHERS GRID END ======*/}

            <FAQInnerSection
              // faqList={this.state.faqsData.filter((x) => x.innerpage == this.state.singleHotel?.slug)}
              faqList={this.state.faqsData}
              activeLang={activeLang}
            />
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

export default DiningInner;
