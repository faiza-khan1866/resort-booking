import React, { useEffect } from 'react'
import GalleryTitleBlock from '../sections/gallery/main-text-block';
import GalleryGrid from '../sections/gallery/gallery-grid';
import SEOTags from "../sections/common/SEOTags";
import PageLayout from "../layouts/PageLayout";
import { constants } from "../../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { fetchSections, removeSelectedSection, } from '../../redux/actions/sectionsActions';

const GalleryMain = (props) => {

  const dispatch = useDispatch();
  const activeLang = localStorage.getItem('lang');

  //gallery page
  const pageId = `6297121cc333da05c64f27d2`;

  useEffect(() => {
    if (activeLang && activeLang !== "" && pageId && pageId !== "") dispatch(fetchSections(pageId, activeLang));
    return () => {
      dispatch(removeSelectedSection());
    };
  }, [pageId]);


  const banner = useSelector((state) => state.allSections.sections?.banner);
  const galleryData = useSelector((state) => state.allSections.sections?.imageGallery);
  const meta = useSelector((state) => state.allSections.sections?.meta);

  const breadcrumbItems = [
    {
      text: `${constants?.site_content?.about_page?.bread_crumb?.title[activeLang]}`,
      link: '/',
      isActive: false,
    },
    {
      text: `${constants?.site_content?.gallery_page?.bread_crumb?.title2[activeLang]}`,
      link: '/gallery',
      isActive: true,
    },
  ]

  return (
    <div className="bg-white">
      <SEOTags meta={meta} />
      {
        galleryData ?
          <PageLayout
            header={{ isMobile: props.isMobile, isTop: props.isTop }}
            banner={{ title: banner?.section_name, image: banner?.section_avatar?.url }}
            breadCrumb={{ items: breadcrumbItems }}
            activeLang={activeLang}
          >
            {/*====== TITLE START ======*/}
            <GalleryTitleBlock
              activeLang={activeLang}
            />
            {/*====== TITLE END ======*/}
            {/*====== GALLERY GRID START ======*/}
            <GalleryGrid title={null}
              data={galleryData}

            />
            {/*====== GALLERY GRID END ======*/}
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

export default GalleryMain;
