import React, { useState, useEffect } from "react";
import Banner from "../sections/homepage-two/Banner";
import Bookingform from "../sections/homepage-two/Bookingform";
import BottomNavigator from "../sections/homepage-two/BottomNavigator";
import BreadCrumb from "./BreadCrumb";
import Footertwo from "./Footertwo";
import Headertwo from "./Headertwo";
import API from "../../langapi/http";
export default function PageLayout(props) {
  const {
    header,
    banner,
    hideBooking,
    bookingForm,
    breadCrumb,
    image,
    activeLang,
    isMain,
  } = props;

  useEffect(() => {
    getCommonData();
  }, [activeLang]);

  const [commonData, setCommonData] = useState([]);

  const getCommonData = () => {
    API.get(`/get_header?lang=${activeLang}`)
      .then((response) => {
        const allData = response?.data?.data;
        setCommonData(allData);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div key={props.key}>
      <Headertwo {...header} key={props.key} headerData={commonData} />
      <Banner {...banner} activeLang={activeLang} isMain={isMain} {...header} />
      {!hideBooking && <Bookingform />}
      <BreadCrumb {...breadCrumb} activeLang={activeLang} />
      {props.children}
      <Footertwo footerLinks={commonData} />
      <BottomNavigator activeLang={activeLang} />
    </div>
  );
}
