import React, { useEffect, useState } from 'react'
import RoomTitleBlock from '../sections/room-suites/main-text-block';
import RoomSuiteGrid from '../sections/room-suites/room-suites-grid';
import API from '../../langapi/http';
import PageLayout from "../layouts/PageLayout";
import SEOTags from "../sections/common/SEOTags";
import { constants } from "../../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { fetchSections, removeSelectedSection } from '../../redux/actions/sectionsActions';

const RoomSuites = (props) => {

  const dispatch = useDispatch();
  const activeLang = localStorage.getItem('lang');

  //rooms page
  const pageId = `62970893199be664df7a3a32`;

  useEffect(() => {
    if (activeLang && activeLang !== "" && pageId && pageId !== "") dispatch(fetchSections(pageId, activeLang));
    return () => {
      dispatch(removeSelectedSection());
    };
  }, [pageId]);

  //  rooms Data

  const [roomsData, setRoomsData] = useState([]);
  const [suitesData, setSuitesData] = useState([]);

  const getRoomsData = () => {
    API.get(`/get_rooms_list?lang=${activeLang}`).then(response => {
      const allRooms = response.data?.data?.filter(x => x.room_type == 1);
      const allSuites = response.data?.data?.filter(x => x.room_type == 2);
      setRoomsData(allRooms);
      setSuitesData(allSuites);
    })
      .catch(err => {
        console.log(err)
      })
  }

  useEffect(() => {
    getRoomsData();
  }, [activeLang]);

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
      text: `${constants?.site_content?.rooms_page?.bread_crumb?.title2[activeLang]}`,
      link: '/rooms-suites-seychelles',
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
            <RoomTitleBlock data={intro} />
            {/*====== TITLE END ======*/}
            {/*====== ROOM GRID START ======*/}
            <RoomSuiteGrid title={constants?.site_content?.rooms_page?.room_grid?.title[activeLang]}
              data={roomsData}
              activeLang={activeLang}
            />
            {/*====== ROOM GRID END ======*/}
            {/*====== SUITES GRID START ======*/}
            <RoomSuiteGrid title={constants?.site_content?.rooms_page?.room_grid?.title2[activeLang]}
              data={suitesData}
              activeLang={activeLang}
            />
            {/*====== SUITES GRID END ======*/}
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

export default RoomSuites;
