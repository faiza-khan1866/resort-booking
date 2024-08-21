import React, { useEffect } from 'react'
import SustainIntroBlock from '../sections/sustainability/intro-block';
import SustainPillarsBlock from '../sections/sustainability/pillars-block';
import SustainProjectsBlock from '../sections/sustainability/projects-block';
import SustainEngeryBlock from '../sections/sustainability/energy-conservation';
import SEOTags from "../sections/common/SEOTags";
import { constants } from '../../utils/constants';
import PageLayout from "../layouts/PageLayout";
import { useDispatch, useSelector } from "react-redux";
import { fetchSections, removeSelectedSection, } from '../../redux/actions/sectionsActions';

const Sustainability = (props) => {

  const dispatch = useDispatch();
  const activeLang = localStorage.getItem('lang');

  //sustainability page
  const pageId = `629706ed0da7c94b690c6cc2`;

  useEffect(() => {
    if (activeLang && activeLang !== "" && pageId && pageId !== "") dispatch(fetchSections(pageId, activeLang));
    return () => {
      dispatch(removeSelectedSection());
    };
  }, [pageId]);

  const banner = useSelector((state) => state.allSections.sections?.banner);
  const intro = useSelector((state) => state.allSections.sections?.intro);
  const projects = useSelector((state) => state.allSections.sections?.projects);
  const pillars = useSelector((state) => state.allSections.sections?.pillars);
  const energy = useSelector((state) => state.allSections.sections?.energy);
  const meta = useSelector((state) => state.allSections.sections?.meta);

  const breadcrumbItems = [
    {
      text: `${constants?.site_content?.about_page?.bread_crumb?.title[activeLang]}`,
      link: '/',
      isActive: false,
    },
    {
      text: `${constants?.site_content?.sustainbility_page?.bread_crumb?.title2[activeLang]}`,
      link: '/sustainability',
      isActive: true,
    },
  ]
  return (
    <div className="bg-white sustainability-wrapper">
      <SEOTags meta={meta} />
      {
        banner ?
          <PageLayout
            header={{ isMobile: props.isMobile, isTop: props.isTop }}
            banner={{ title: banner?.section_name, image: banner?.section_avatar?.url }}
            breadCrumb={{ items: breadcrumbItems }}
            activeLang={activeLang}
          >
            {/*====== INTRO START ======*/}
            <SustainIntroBlock data={intro}
              activeLang={activeLang}
            />
            {/*====== INTRO END ======*/}
            {/*====== PILLARS START ======*/}
            <SustainPillarsBlock data={pillars} />
            {/*====== PILLARS END ======*/}
            {/*====== PROJECTS SLIDER START ======*/}
            <SustainProjectsBlock data={projects} />
            {/*====== PROJECTS SLIDER END ======*/}
            <SustainEngeryBlock data={energy} />
            {/*====== PROJECTS SLIDER END ======*/}

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

export default Sustainability;
