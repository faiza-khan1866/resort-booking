import React, { useEffect, useState } from 'react'
import FAQIntroBlock from '../sections/faq/intro-block';
import API from '../../langapi/http';
import SEOTags from "../sections/common/SEOTags";
import PageLayout from "../layouts/PageLayout";
import { constants } from '../../utils/constants';
import { useDispatch, useSelector } from "react-redux";
import { fetchSections, removeSelectedSection, } from '../../redux/actions/sectionsActions';

const FAQ = (props) => {

  const dispatch = useDispatch();
  const activeLang = localStorage.getItem('lang');

  //faq  page
  const pageId = `6297124bb6801e339e7cb7c2`;

  useEffect(() => {
    if (activeLang && activeLang !== "" && pageId && pageId !== "") dispatch(fetchSections(pageId, activeLang));
    return () => {
      dispatch(removeSelectedSection());
    };
  }, [pageId]);

  //  faqs Data

  const [faqsData, setFaqsData] = useState([]);

  const getFaqData = () => {
    API.get(`/faqs?lang=${activeLang}`).then(response => {
      const allData = response.data?.data?.filter(
        (x) => x.page === "faq"
      ) || [];
      setFaqsData(allData);
    })
      .catch(err => {
        console.log(err)
      })
  }


  useEffect(() => {
    getFaqData();
  }, [activeLang]);

  const banner = useSelector((state) => state.allSections.sections?.banner);
  const meta = useSelector((state) => state.allSections.sections?.meta);

  const breadcrumbItems = [
    {
      text: `${constants?.site_content?.about_page?.bread_crumb?.title[activeLang]}`,
      link: '/',
      isActive: false,
    },
    {
      text: 'F.A.Qs',
      link: '/faqs',
      isActive: true,
    },
  ]
  return (
    <div>
      <SEOTags meta={meta} />
      {
        banner ?
          <PageLayout
            header={{ isMobile: props.isMobile, isTop: props.isTop }}
            banner={{ title: banner?.section_name, image: banner?.section_avatar?.url }}
            breadCrumb={{ items: breadcrumbItems }}
            activeLang={activeLang}
          >
            {/*  /!*====== INTRO START ======*!/*/}
            <div className="bg-white faq-wrapper">
              <FAQIntroBlock
                faqList={faqsData}
                activeLang={activeLang}
              />
              {/*====== INTRO END ======*/}
            </div>

          </PageLayout>
          :
          <div className={"preloader align-items-center justify-content-center"}>
            <div className="cssload-container">
              <div className="cssload-loading"><i /><i /><i /><i /></div>
            </div>
          </div>
      }
    </div >
  );
}

export default FAQ;
