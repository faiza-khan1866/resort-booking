import React, { useEffect, useState } from "react";

//components
import Textblock from "../sections/homepage-two/Textblock";
import RoomSlider from "../sections/homepage-two/RoomSlider";
import Experience from "../sections/homepage-two/Experience";
import GuestReviews from "../sections/homepage-two/GuestReviews";
import ServiceTabs from "../sections/homepage-two/ServicesTabs";
import API from "../../langapi/http";
import bannerimg1 from "../../assets/img/banner/home.jpg";
import homeBannerDesktop from "../../assets/img/banner/home-banner-desktop.jpg";
import homeBannerMobile from "../../assets/img/banner/home-banner-mobile.jpg";
import PopUp from "../popup/PopUp";
import Helmet from "react-helmet";
import PageLayout from "../layouts/PageLayout";
import { constants } from "../../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { fetchPremiuimOffers } from "../../redux/actions/premiuimOffersActions";

const Hometwo = (props) => {
  const dispatch = useDispatch();
  const activeLang = localStorage.getItem("lang");

  const [offerPopup, setOfferPopup] = useState(true);

  const handleShowOffer = () => {
    setOfferPopup(!offerPopup);
  };

  //Premiuim offers

  useEffect(() => {
    const activeLang = localStorage.getItem("lang");
    if (activeLang && activeLang !== "")
      dispatch(fetchPremiuimOffers(activeLang));
  }, []);

  //  rooms Data

  const [roomsData, setRoomsData] = useState([]);

  const getRoomsData = () => {
    API.get(`/get_rooms_list?lang=${activeLang}`)
      .then((response) => {
        const allData = response.data?.data;
        setRoomsData(allData);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getRoomsData();
  }, [activeLang]);

  const premiumOffers = useSelector(
    (state) => state.allPremiuimOffers.premiuimoffers
  );

  return (
    <div>
      <Helmet>
        <title>Fishermans Cove Resort</title>
        <meta name="description" content="Fishermans Cove Resort" />
      </Helmet>

      <PageLayout
        header={{ isMobile: props.isMobile, isTop: props.isTop }}
        banner={{
          title: constants?.site_content?.home_page?.banner?.title[activeLang],
          subtitle:
            constants?.site_content?.home_page?.banner?.subtitle[activeLang],
          image: { homeBannerDesktop },
          mobile: { homeBannerMobile },
        }}
        // breadCrumb={{ items: breadcrumbItems }}
        activeLang={activeLang}
        key={"home"}
        isMain={true}
      >
        {/*====== ROOM SLIDER START ======*/}
        <RoomSlider data={roomsData} activeLang={activeLang} />

        {/*====== ROOM SLIDER END ======*/}
        {/*====== TEXT BLOCK START ======*/}
        <Textblock activeLang={activeLang} />
        {/*====== TEXT BLOCK END ======*/}
        {/*====== SERVICES TABS START ======*/}
        <ServiceTabs data={premiumOffers} activeLang={activeLang} />
        {/*====== SERVICES TABS END ======*/}
        {/*====== TESTIMONIAL SLIDER START ======*/}
        <GuestReviews activeLang={activeLang} />
        {/*====== EXPERIENCE START ======*/}
        <Experience activeLang={activeLang} />
        {/*====== EXPERIENCE END ======*/}
        {/* <PopUp show={offerPopup} onHide={handleShowOffer}
          activeLang={activeLang}
        /> */}
      </PageLayout>
      {/* <div style={{ display: "none" }}>
          <h3>
            What are the best luxury resorts for stays in Seychelles Victoria?{" "}
          </h3>
          <p>
            There are a number of high-end and low-end hotels and resorts in
            Seychelles. Price varies largely depending on the comfort and
            amenities provided. Fishermans Cove Resort is one of the best
            resorts to stay while visiting Seychelles.
          </p>

          <h2>
            How much does it cost to stay at a romantic Resort in Seychelles
            Victoria?{" "}
          </h2>
          <p>
            The average prices for Seychelles hotels and resorts start from
            around 400$ and can go up to 1800$. Seychelles has some of the best
            hotels and beach resorts with varying prices.
          </p>

          <h2>
            Do any honeymoon resorts in Seychelles have a private swimming pool?{" "}
          </h2>
          <p>
            Most of the Seychelle five-star resorts have private swimming pools
            of different sizes.
          </p>

          <h2>Which Seychelles Luxury resorts have rooms with great views? </h2>
          <p>
            Seychelles is famous for its scenic beaches and lush plains so
            wherever you go in Seychelles, you are sure to get treated by
            breathtaking views. Fishermans Cove Resort allows you to get
            mesmerized by views of the Indian Ocean while enjoying a comfortable
            stay at the resort.
          </p>

          <h3>Which resorts in Seychelles are good for honeymoon travel?</h3>
          <p>
            Seychelles is one of the top honeymoon destinations and there are
            numerous resorts to choose from. Fishermans Cove Resort is one of
            the recommended ones because of romantic views and top of the line
            service.
          </p>
        </div> */}
    </div>
  );
};

export default Hometwo;
