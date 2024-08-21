import React, { useEffect, useState } from 'react'
import LeisureTitleBlock from '../sections/leisure/main-text-block';
import LeisureGrid from '../sections/leisure/leisure-grid';
import LeisureAwards from '../sections/leisure/leisure-awards';
import PageLayout from "../layouts/PageLayout";
import SEOTags from "../sections/common/SEOTags";
import { constants } from '../../utils/constants';
import { useDispatch, useSelector } from "react-redux";
import { fetchSections, removeSelectedSection, } from '../../redux/actions/sectionsActions';

const Leisure = (props) => {

  const dispatch = useDispatch();
  const activeLang = localStorage.getItem('lang');

  //leisure page
  const pageId = `629704001b6e34298e398993`;

  useEffect(() => {
    if (activeLang && activeLang !== "" && pageId && pageId !== "") dispatch(fetchSections(pageId, activeLang));
    return () => {
      dispatch(removeSelectedSection());
    };
  }, [pageId]);


  const banner = useSelector((state) => state.allSections.sections?.banner);
  const activities = useSelector((state) => state.allSections.sections?.activities);
  const Fishing = useSelector((state) => state.allSections.sections?.Fishing);
  const Unlock = useSelector((state) => state.allSections.sections?.Unlock);
  const Water = useSelector((state) => state.allSections.sections?.Water);
  const awards = useSelector((state) => state.allSections.sections?.awards);
  const excellence = useSelector((state) => state.allSections.sections?.excellence)

  // const activitiesData = {

  // }

  // const awardData = {
  //   awards,
  //   excellence
  // }

  const meta = useSelector((state) => state.allSections.sections?.meta);

  const breadcrumbItems = [
    {
      text: `${constants?.site_content?.about_page?.bread_crumb?.title[activeLang]}`,
      link: '/',
      isActive: false,
    },
    {
      text: `${constants?.site_content?.leisure_page?.bread_crumb?.title2[activeLang]}`,
      link: '/whats-on',
      isActive: true,
    },
  ]
  return (
    <div className="bg-white">
      <SEOTags meta={meta} />
      {
        Fishing ?
          <PageLayout
            header={{ isMobile: props.isMobile, isTop: props.isTop }}
            banner={{ title: banner?.section_name, image: banner?.section_avatar?.url }}
            breadCrumb={{ items: breadcrumbItems }}
            activeLang={activeLang}
          >
            {/*/!*====== TITLE START ======*!/*/}
            <LeisureTitleBlock
              activeLang={activeLang}
            />
            {/*====== TITLE END ======*/}
            {/*====== ROOM GRID START ======*/}
            <LeisureGrid
              actData={{
                activities,
                Fishing,
                Unlock,
                Water
              }}
            // data={roomsData}
            />
            {/*====== ROOM GRID END ======*/}
            {/* ===== LEISURE AWARDS START */}
            <LeisureAwards
              award={{
                awards,
                excellence
              }}
              activeLang={activeLang}
            />
            {/* ===== LEISURE AWARDS END */}
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

export default Leisure;