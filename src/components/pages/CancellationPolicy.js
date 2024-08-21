import React, { useEffect } from 'react'
import CancellationIntroBlock from '../sections/cancellation-policy/intro-block';
import SEOTags from "../sections/common/SEOTags";
import PageLayout from "../layouts/PageLayout";
import { constants } from '../../utils/constants';
import { useDispatch, useSelector } from "react-redux";
import { fetchSections, removeSelectedSection, } from '../../redux/actions/sectionsActions';

const CancellationPolicy = (props) => {

  const dispatch = useDispatch();
  const activeLang = localStorage.getItem('lang');

  //Cancellation policy  page
  const pageId = `6297083858c56f617f04bf42`;

  useEffect(() => {
    if (activeLang && activeLang !== "" && pageId && pageId !== "") dispatch(fetchSections(pageId, activeLang));
    return () => {
      dispatch(removeSelectedSection());
    };
  }, [pageId]);

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
      text: `${constants?.site_content?.cancellationPolicy_page?.bread_crumb?.title2[activeLang]}`,
      link: '/cancellation-policy',
      isActive: true,
    },
  ]
  return (
    <div className="bg-white cancellation-policy-wrapper">
      <SEOTags meta={meta} />

      {
        banner ?
          <PageLayout
            header={{ isMobile: props.isMobile, isTop: props.isTop }}
            banner={{ title: banner?.section_name, image: banner?.section_avatar?.url }}
            breadCrumb={{ items: breadcrumbItems }}
            activeLang={activeLang}
          >
            {/*/!*====== INTRO START ======*!/*/}
            <CancellationIntroBlock data={intro} />
            {/*====== INTRO END ======*/}

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

export default CancellationPolicy;
