import React, { useEffect, useState } from 'react'
import AboutTitleBlock from '../sections/about-us/main-text-block';
import AboutServices from '../sections/about-us/about-services';
import AboutSecondaryTextBlock from '../sections/about-us/secondary-text-block';
import AboutOfferSlider from '../sections/about-us/about-offer-slider';
import PageLayout from '../layouts/PageLayout';
import SEOTags from "../sections/common/SEOTags";
import { constants } from "../../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { fetchSections, removeSelectedSection } from '../../redux/actions/sectionsActions';
import { fetchPremiuimOffers } from '../../redux/actions/premiuimOffersActions';

const AboutUs = (props) => {

  const dispatch = useDispatch();
  const activeLang = localStorage.getItem('lang');

  //about page
  const pageId = `6297070d0da7c94b690c6cc3`;

  useEffect(() => {
    if (activeLang && activeLang !== "" && pageId && pageId !== "") dispatch(fetchSections(pageId, activeLang));
    return () => {
      dispatch(removeSelectedSection());
    };
  }, [pageId]);

  //Premiuim offers 

  useEffect(() => {
    const activeLang = localStorage.getItem('lang');
    if (activeLang && activeLang !== "") dispatch(fetchPremiuimOffers(activeLang));
  }, []);

  const premiumOffers = useSelector((state) => state.allPremiuimOffers.premiuimoffers);
  const banner = useSelector((state) => state.allSections.sections?.banner);
  const sections = useSelector((state) => state.allSections.sections);
  const meta = useSelector((state) => state.allSections.sections?.meta);

  const breadcrumbItems = [
    {
      text: `${constants?.site_content?.about_page?.bread_crumb?.title[activeLang]}`,
      link: '/',
      isActive: false,
    },
    {
      text: `${constants?.site_content?.about_page?.bread_crumb?.title2[activeLang]}`,
      link: '/about-us',
      isActive: true,
    },
  ];

  return (
    <div className="bg-white about-us-wrapper">
      <SEOTags meta={meta} />
      {
        banner ?
          <PageLayout
            header={{ isMobile: props.isMobile, isTop: props.isTop }}
            banner={{ title: banner?.section_name, image: banner?.section_avatar?.url }}
            breadCrumb={{ items: breadcrumbItems }}
            activeLang={activeLang}
          >
            <AboutTitleBlock data={sections?.intro}
            />
            {/*====== TITLE END ======*/}

            {/*====== SERVICES START ======*/}
            <AboutServices
              activeLang={activeLang}
            />
            {/*====== SERVICES END ======*/}
            {/*====== SECONDARY START ======*/}
            <AboutSecondaryTextBlock data={sections?.dine}
              activeLang={activeLang}
            />
            {/*====== SECONDARY END ======*/}
            {/*====== ABOUT SLIDER START ======*/}
            <AboutOfferSlider data={premiumOffers} title={constants?.site_content?.about_page?.about_offer?.title[activeLang]}
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

export default AboutUs;