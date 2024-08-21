import React, { useEffect } from 'react'
import SpaWellnessTitleBlock from '../sections/spa-wellness/spa-title-block';
import SpaWellnessRecommendations from '../sections/spa-wellness/spa-offers';
import SEOTags from "../sections/common/SEOTags";
import PageLayout from "../layouts/PageLayout";
import { constants } from '../../utils/constants';
import { useDispatch, useSelector } from "react-redux";
import { fetchSections, removeSelectedSection, } from '../../redux/actions/sectionsActions';
import { fetchPremiuimOffers } from '../../redux/actions/premiuimOffersActions';

const SpaWellness = (props) => {

  const dispatch = useDispatch();
  const activeLang = localStorage.getItem('lang');

  //SpaWellness page
  const pageId = `629707716acdd721ac47ee52`;

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
  const intro = useSelector((state) => state.allSections.sections?.intro);
  const meta = useSelector((state) => state.allSections.sections?.meta);

  const breadcrumbItems = [
    {
      text: `${constants?.site_content?.about_page?.bread_crumb?.title[activeLang]}`,
      link: '/',
      isActive: false,
    },
    {
      text: `${constants?.site_content?.spawellness_page?.bread_crumb?.title2[activeLang]}`,
      link: '/spa-wellness',
      isActive: true,
    },
  ]

  return (
    <div className="bg-white spa-wrapper">
      <SEOTags meta={meta} />
      {
        banner ?
          <PageLayout
            header={{ isMobile: props.isMobile, isTop: props.isTop }}
            banner={{ title: banner?.section_name, image: banner?.section_avatar?.url }}
            breadCrumb={{ items: breadcrumbItems }}
            activeLang={activeLang}
          >
            {/*/!*====== PROJECTS SLIDER START ======*!/*/}
            <SpaWellnessTitleBlock data={intro}
              activeLang={activeLang}
            />
            {/*====== PROJECTS SLIDER END ======*/}
            {/*====== RECOOMENDATIONS START ======*/}
            <SpaWellnessRecommendations title={constants?.site_content?.spawellness_page?.offer_sec?.title[activeLang]}
              data={premiumOffers}
              activeLang={activeLang}
            />
            {/*====== RECOOMENDATIONS END ======*/}
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

export default SpaWellness;
