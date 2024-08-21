import React, { useEffect, useState } from 'react'
import LeisureContentBlocks from '../sections/leisure-inner/content-blocks';
import FAQSection from '../sections/common/FAQSection';
import PageLayout from '../layouts/PageLayout';
import API from '../../langapi/http';
import { constants } from '../../utils/constants';
import SEOTags from "../sections/common/SEOTags";
import { useDispatch, useSelector } from "react-redux";
import { fetchSections, removeSelectedSection, } from '../../redux/actions/sectionsActions';

const LeisureInner = (props) => {

  const dispatch = useDispatch();
  const activeLang = localStorage.getItem('lang');

  //Leisure Inner page
  const pageId = `62970741f09c76219b3f3602`;

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
        (x) => x.page === "resort_activities"
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
  const lounge = useSelector((state) => state.allSections.sections?.lounge);
  const snorkeling = useSelector((state) => state.allSections.sections?.snorkeling);
  const kayaking = useSelector((state) => state.allSections.sections?.kayaking);
  const marine = useSelector((state) => state.allSections.sections?.marine);
  const others = useSelector((state) => state.allSections.sections?.others);

  const breadcrumbItems = [
    {
      text: `${constants?.site_content?.about_page?.bread_crumb?.title[activeLang]}`,
      link: '/',
      isActive: false,
    },
    {
      text: `${constants?.site_content?.leisure_page?.bread_crumb?.title2[activeLang]}`,
      link: '/whats-on',
      isActive: false,
    },
    {
      text: `${constants?.site_content?.leisureInner_page?.bread_crumb?.title3[activeLang]}`,
      link: '/leisure-inner',
      isActive: true,
    },
  ];
  return (
    <div className="bg-white leisure-inner-wrapper">

      <SEOTags meta={meta} />
      {
        lounge ?
          <PageLayout
            header={{ isMobile: props.isMobile, isTop: props.isTop }}
            banner={{ title: banner?.section_name, image: banner?.section_avatar?.url }}
            breadCrumb={{ items: breadcrumbItems }}
            activeLang={activeLang}
          >

            {/*====== INTRO START ======*/}
            <LeisureContentBlocks activities={{
              lounge,
              snorkeling,
              kayaking,
              marine,
              others
            }}
              activeLang={activeLang}
            />
            {/*====== INTRO END ======*/}

            <FAQSection
              faqData={faqsData}
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

export default LeisureInner;
