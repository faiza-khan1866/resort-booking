import React, { useEffect } from 'react'
import ContactTitleBlock from '../sections/contact-us/main-text-block';
import ContactUsForm from '../sections/contact-us/contact-form';
import ContactOfferSlider from '../sections/contact-us/contact-offer-slider';
import API from '../../langapi/http';
import PageLayout from '../layouts/PageLayout';
import SEOTags from "../sections/common/SEOTags";
import { constants } from '../../utils/constants';
import { useDispatch, useSelector } from "react-redux";
import { fetchSections, removeSelectedSection, } from '../../redux/actions/sectionsActions';

const ContactUs = (props) => {

  const dispatch = useDispatch();
  const activeLang = localStorage.getItem('lang');

  //contact page
  const pageId = `6297085cfb78da3c7314e1d2`;

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
      text: `${constants?.site_content?.contact_page?.bread_crumb?.title2[activeLang]}`,
      link: '/contact',
      isActive: true,
    },
  ];
  const roomsData = [
    {
      title: `${constants?.site_content?.contact_page?.contact_offer?.room1[activeLang]}`,
      image: require('./../../assets/img/social/01.jpg')
    },
    {
      title: `${constants?.site_content?.contact_page?.contact_offer?.room2[activeLang]}`,
      image: require('./../../assets/img/social/02.jpg')
    },
    {
      title: `${constants?.site_content?.contact_page?.contact_offer?.room3[activeLang]}`,
      image: require('./../../assets/img/social/03.jpg')
    },
    {
      title: `${constants?.site_content?.contact_page?.contact_offer?.room3[activeLang]}`,
      image: require('./../../assets/img/social/04.jpg')
    },
    {
      title: `${constants?.site_content?.contact_page?.contact_offer?.room3[activeLang]}`,
      image: require('./../../assets/img/social/05.jpg')
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
            {/*====== TITLE START ======*/}
            <ContactTitleBlock data={intro ? intro?.section_content : null}
              activeLang={activeLang}
            />
            {/*====== TITLE END ======*/}
            {/*====== CONTACT FORM START ======*/}
            <ContactUsForm
              activeLang={activeLang}
            />
            {/*====== CONTACT FORM END ======*/}
            {/*====== ABOUT SLIDER START ======*/}
            <ContactOfferSlider data={roomsData} title={constants?.site_content?.contact_page?.contact_offer?.title[activeLang]} />
            {/*====== ABOUT SLIDER END ======*/}

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

export default ContactUs;
