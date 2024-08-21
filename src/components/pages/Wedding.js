import React, { useEffect, useState } from 'react'
import WeddingTitleBlock from '../sections/wedding-main/main-text-block';
import WeddingGrid from '../sections/wedding-main/wedding-grid';
import WeddingFormDialog from '../sections/wedding-main/quote-form';
import FAQSection from '../sections/common/FAQSection';
import API from '../../langapi/http';
import SEOTags from '../sections/common/SEOTags';
import PageLayout from '../layouts/PageLayout';
import { constants } from "../../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { fetchSections, removeSelectedSection, } from '../../redux/actions/sectionsActions';

const Wedding = (props) => {

  const dispatch = useDispatch();
  const activeLang = localStorage.getItem('lang');

  //wedding page
  const pageId = `629706a2aae6f31e547b80c3`;

  useEffect(() => {
    if (activeLang && activeLang !== "" && pageId && pageId !== "") dispatch(fetchSections(pageId, activeLang));
    return () => {
      dispatch(removeSelectedSection());
    };
  }, [pageId]);

  //  wedding Data

  const [weddingData, setWeddingData] = useState([]);

  const getWeddingData = () => {
    API.get(`/weddings?lang=${activeLang}`).then(response => {
      const allData = response.data?.data;
      setWeddingData(allData);
    })
      .catch(err => {
        console.log(err)
      })
  }


  useEffect(() => {
    getWeddingData();
  }, [activeLang]);

  const banner = useSelector((state) => state.allSections.sections?.banner);
  const intro = useSelector((state) => state.allSections.sections?.intro);
  const meta = useSelector((state) => state.allSections.sections?.meta);
  const faq = useSelector((state) => state.allSections.sections?.faq?.section_content);

  const breadcrumbItems = [
    {
      text: `${constants?.site_content?.about_page?.bread_crumb?.title[activeLang]}`,
      link: '/',
      isActive: false,
    },
    {
      text: `${constants?.site_content?.weddings_page?.bread_crumb?.title2[activeLang]}`,
      link: '/wedding',
      isActive: true,
    },
  ];

  return (
    <div className="bg-white">
      <SEOTags meta={meta} />
      {
        banner ?
          <PageLayout
            header={{ isMobile: props.isMobile, isTop: props.isTop }}
            banner={{ title: banner?.section_name, image: banner?.section_avatar?.url }}
            breadCrumb={{ items: breadcrumbItems }}
            activeLang={activeLang}
          >
            {/*====== TITLE START ======*/}
            <WeddingTitleBlock intro={intro}
              activeLang={activeLang}
            />
            {/*====== TITLE END ======*/}
            {/*====== ROOM GRID START ======*/}
            <WeddingGrid title={constants?.site_content?.weddings_page?.wedding_grid?.title[activeLang]}
              data={weddingData} />
            {/*====== ROOM GRID END ======*/}
            <WeddingFormDialog
              activeLang={activeLang}
            />

            <FAQSection
              faqData={faq}
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

export default Wedding;
