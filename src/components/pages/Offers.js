import React, { useEffect, useState } from "react";
import OfferTitleBlock from "../sections/offers/main-text-block";
import OfferGrid from "../sections/offers/offer-grid";
import API from "../../langapi/http";
import SEOTags from "../sections/common/SEOTags";
import { constants } from "../../utils/constants";
import PageLayout from '../layouts/PageLayout';
import { useDispatch, useSelector } from "react-redux";
import { fetchSections, removeSelectedSection, } from '../../redux/actions/sectionsActions';


const Offers = (props) => {

  const dispatch = useDispatch();
  const activeLang = localStorage.getItem('lang');

  //offers page
  const pageId = '629a08d1316b8e36e6367322';

  useEffect(() => {
    // console.log(props);
    if (activeLang && activeLang !== "" && pageId && pageId !== "") dispatch(fetchSections(pageId, activeLang));
    return () => {
      dispatch(removeSelectedSection());
    };
    
  }, [pageId]);

  //  offers Data

  const [offers, setOffers] = useState([]);

  const getOffersData = () => {
    API.get(`/get_offers?lang=${activeLang}`).then(response => {
      const allData = response.data?.data;
      setOffers(allData);
    })
      .catch(err => {
        console.log(err)
      })
  }


  useEffect(() => {
    getOffersData();
  }, [activeLang]);

  const banner = useSelector((state) => state.allSections.sections?.banner);
  const meta = useSelector((state) => state.allSections.sections?.meta);

  const breadcrumbItems = [
    {
      text: `${constants?.site_content?.about_page?.bread_crumb?.title[activeLang]}`,
      link: "/",
      isActive: false,
    },
    {
      text: `${constants?.site_content?.offers_page?.bread_crumb?.title2[activeLang]}`,
      link: "/offers",
      isActive: true,
    },
  ];
  return (
    <div className="bg-white">
      <SEOTags meta={meta} />
      {
        offers.length > 0 ?
          <PageLayout
            header={{ isMobile: props.isMobile, isTop: props.isTop }}
            banner={{ title: banner?.section_name, image: banner?.section_avatar?.url }}
            breadCrumb={{ items: breadcrumbItems }}
            activeLang={activeLang}
          >
            {/*====== TITLE START ======*/}
            <OfferTitleBlock
              title={banner?.section_name}
            />
            {/*====== TITLE END ======*/}
            {/*====== ROOM GRID START ======*/}
            <OfferGrid title={null} data={offers} />
            {/*====== ROOM GRID END ======*/}
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
export default Offers;
