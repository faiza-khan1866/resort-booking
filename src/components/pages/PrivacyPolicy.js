import React, { useEffect } from 'react'
import PrivacyIntroBlock from '../sections/privacy-policy/intro-block';
import SEOTags from "../sections/common/SEOTags";
import PageLayout from "../layouts/PageLayout";
import { constants } from '../../utils/constants';
import { useDispatch, useSelector } from "react-redux";
import { fetchSections, removeSelectedSection, } from '../../redux/actions/sectionsActions';

const PrivacyPolicy = (props) => {

  const dispatch = useDispatch();
  const activeLang = localStorage.getItem('lang');

  //Privacy Policy page
  const pageId = `629707cc98454867af5ac8d2`;

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
      text: `${constants?.site_content?.privacyPolicy_page?.bread_crumb?.title2[activeLang]}`,
      link: '/privacy-policy',
      isActive: true,
    },
  ]
  return (
    <div className="bg-white privacy-policy-wrapper">
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
            <PrivacyIntroBlock data={intro} />

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

export default PrivacyPolicy;
