import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import { PhoneRounded, EmailRounded } from "@material-ui/icons";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
});

const BottomNavigator = ({ activeLang }) => {
  const classes = useStyles();
  const [value, setValue] = React.useState("");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  let currentRoute = window.location.href.split("/")[4];

  return (
    <div className="bottom-navigator-wrapper">
      <BottomNavigation
        showLabels={false}
        value={value}
        onChange={handleChange}
        className={classes.root}
      >
        {currentRoute === "offers" ? (
          <Link
            className="main-btn btn-border"
            to={"#"}
            style={{
              borderColor: "#be8a7d",
              background: "#be8a7d",
              color: "white",
            }}
            onClick={(e) =>
              window.gtag_report_conversion(
                `${
                  activeLang === "en"
                    ? "https://be.synxis.com/?&chain=27304&hotel=31842&locale=en-GB&promo=LeCardinal"
                    : activeLang === "fr"
                    ? "https://be.synxis.com/?Hotel=31842&Chain=27304&locale=fr-FR&promo=LeCardinal"
                    : activeLang === "de"
                    ? "https://be.synxis.com/?Hotel=31842&Chain=27304&locale=de-DE&promo=LeCardinal"
                    : activeLang === "ru"
                    ? "https://be.synxis.com/?Hotel=31842&Chain=27304&locale=ru-RU&promo=LeCardinal"
                    : "https://be.synxis.com/?&chain=27304&hotel=31842&locale=en-GB&promo=LeCardinal"
                }`
              )
            }
          >
            {activeLang === "en"
              ? "Book Now"
              : activeLang === "fr"
              ? "Réserver"
              : activeLang === "de"
              ? "JETZT BUCHEN"
              : activeLang === "ru"
              ? "ЗАБРОНИРОВАТЬ"
              : "Book Now"}
          </Link>
        ) : currentRoute === "black-friday-sale" ? (
          <Link
            className="main-btn btn-border"
            to={"#"}
            style={{
              borderColor: "#be8a7d",
              background: "#be8a7d",
              color: "white",
            }}
            onClick={(e) =>
              window.gtag_report_conversion(
                `${
                  activeLang === "en"
                    ? "https://be.synxis.com/?&chain=27304&hotel=31842&locale=en-GB&promo=BLACKCOVE"
                    : activeLang === "fr"
                    ? "https://be.synxis.com/?Hotel=31842&Chain=27304&locale=fr-FR&promo=BLACKCOVE"
                    : activeLang === "de"
                    ? "https://be.synxis.com/?Hotel=31842&Chain=27304&locale=de-DE&promo=BLACKCOVE"
                    : activeLang === "ru"
                    ? "https://be.synxis.com/?Hotel=31842&Chain=27304&locale=ru-RU&promo=BLACKCOVE"
                    : "https://be.synxis.com/?&chain=27304&hotel=31842&locale=en-GB&promo=BLACKCOVE"
                }`
              )
            }
          >
            {activeLang === "en"
              ? "Book Now"
              : activeLang === "fr"
              ? "Réserver"
              : activeLang === "de"
              ? "JETZT BUCHEN"
              : activeLang === "ru"
              ? "ЗАБРОНИРОВАТЬ"
              : "Book Now"}
          </Link>
        ) : (
          <Link
            className="main-btn btn-border"
            to={"#"}
            style={{
              borderColor: "#be8a7d",
              background: "#be8a7d",
              color: "white",
            }}
            onClick={(e) =>
              window.gtag_report_conversion(
                `${
                  activeLang === "en"
                    ? "https://be.synxis.com/?&chain=27304&hotel=31842&locale=en-GB"
                    : activeLang === "fr"
                    ? "https://be.synxis.com/?Hotel=31842&Chain=27304&locale=fr-FR"
                    : activeLang === "de"
                    ? "https://be.synxis.com/?Hotel=31842&Chain=27304&locale=de-DE"
                    : activeLang === "ru"
                    ? "https://be.synxis.com/?Hotel=31842&Chain=27304&locale=ru-RU"
                    : "https://be.synxis.com/?&chain=27304&hotel=31842&locale=en-GB"
                }`
              )
            }
          >
            {activeLang === "en"
              ? "Book Now"
              : activeLang === "fr"
              ? "Réserver"
              : activeLang === "de"
              ? "JETZT BUCHEN"
              : activeLang === "ru"
              ? "ЗАБРОНИРОВАТЬ"
              : "Book Now"}
          </Link>
        )}

        <a href="tel:+2484677000">
          <PhoneRounded />
        </a>
        <a href="mailto:reservations@fishermanscove-resort.com">
          <EmailRounded />
        </a>
      </BottomNavigation>
    </div>
  );
};

export default BottomNavigator;
