import React, { useState, useEffect } from 'react'
import DiningTitleBlock from '../sections/dining/main-text-block';
import DiningGrid from '../sections/dining/dining-grid';
import FAQSection from '../sections/common/FAQSection';
import PageLayout from "../layouts/PageLayout";
import SEOTags from "../sections/common/SEOTags";
import { constants } from "../../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { fetchSections, removeSelectedSection, } from '../../redux/actions/sectionsActions';
import API from '../../langapi/http';


const Dining = (props) => {

  const dispatch = useDispatch();
  const activeLang = localStorage.getItem('lang');

  //dining page
  const pageId = `62970a9b74ebe90925430da2`;

  useEffect(() => {
    if (activeLang && activeLang !== "" && pageId && pageId !== "") dispatch(fetchSections(pageId, activeLang));
    return () => {
      dispatch(removeSelectedSection());
    };
  }, [pageId]);

  //  dining Data

  const [diningData, setDiningData] = useState([]);

  const getDiningData = () => {
    API.get(`/get_dinings?lang=${activeLang}`).then(response => {
      const allData = response.data?.data;
      setDiningData(allData);
    })
      .catch(err => {
        console.log(err)
      })
  }


  useEffect(() => {
    getDiningData();
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
      text: `${constants?.site_content?.dinning_page?.bread_crumb?.title2[activeLang]}`,
      link: '/fine-dining-seychelles',
      isActive: true,
    },
  ]
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
            {/*/!*====== TITLE START ======*!/*/}
            <DiningTitleBlock data={intro} />
            {/*====== TITLE END ======*/}
            {/*====== ROOM GRID START ======*/}
            <DiningGrid title={null} data={diningData} />
            {/*====== ROOM GRID END ======*/}
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

export default Dining;