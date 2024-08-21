import React from "react";
import { Carousel } from "react-responsive-carousel";
import ReactStars from "react-rating-stars-component";
import { constants } from "../../../utils/constants";

const avatar1 = require("../../../assets/img/testimonial/Philipp.jpg");
const avatar2 = require("../../../assets/img/testimonial/John_Hind.jpg");
const avatar3 = require("../../../assets/img/testimonial/Veronique.jpg");

const GuestReviews = (props) => {
  const reviews = [
    {
      name: `${
        constants?.site_content?.home_page?.guest_review?.review1?.name[
          props?.activeLang
        ]
      }`,
      rating: 5,
      title: `${
        constants?.site_content?.home_page?.guest_review?.review1?.title[
          props?.activeLang
        ]
      }`,
      review: `${
        constants?.site_content?.home_page?.guest_review?.review1?.review[
          props?.activeLang
        ]
      }`,
      image: avatar1,
      link: "https://www.tripadvisor.com/ShowUserReviews-g482879-d302667-r743966655-Fishermans_Cove_Resort-Bel_Ombre_Mahe_Island.html",
    },
    {
      name: `${
        constants?.site_content?.home_page?.guest_review?.review2?.name[
          props?.activeLang
        ]
      }`,
      rating: 5,
      title: `${
        constants?.site_content?.home_page?.guest_review?.review2?.title[
          props?.activeLang
        ]
      }`,
      review: `${
        constants?.site_content?.home_page?.guest_review?.review2?.review[
          props?.activeLang
        ]
      }`,
      image: avatar2,
      link: "https://www.tripadvisor.com/Profile/Hindd20177",
    },
    {
      name: `${
        constants?.site_content?.home_page?.guest_review?.review3?.name[
          props?.activeLang
        ]
      }`,
      rating: 5,
      title: `${
        constants?.site_content?.home_page?.guest_review?.review3?.title[
          props?.activeLang
        ]
      }`,
      review: `${
        constants?.site_content?.home_page?.guest_review?.review3?.review[
          props?.activeLang
        ]
      }`,
      image: avatar3,
      link: "https://www.tripadvisor.com/Profile/Verototoo",
    },
  ];
  return (
    <div className="guest-reviews-wrapper pt-4 pb-3 text-center">
      <div className="trip-logo-wrapper d-inline-block mx-auto">
        <img
          src={require("./../../../assets/img/travellers-choice-white.png")}
          alt=""
        />
      </div>
      <h2>
        {
          constants?.site_content?.home_page?.guest_review?.title[
            props?.activeLang
          ]
        }
      </h2>
      <Carousel
        dynamicHeight={false}
        showStatus={false}
        showArrows={true}
        showIndicators={false}
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={6000}
        className="guest-carousel"
        stopOnHover={false}
      >
        {reviews.map((x) => (
          <div className="review-wrapper mx-auto py-3">
            <img className="gt-img rounded-circle" src={x.image} alt={x.name} />
            <h5 className="gt-name font-weight-bold">{x.name}</h5>
            <ReactStars
              classNames="gt-rating"
              count={5}
              value={x.rating}
              edit={false}
              size={28}
            />
            <h4 className="gt-title">{x.title}</h4>
            <p className="gt-review">{x.review}</p>
            <a href={x.link} class="mt-2">
              {
                constants?.site_content?.home_page?.guest_review?.btn_text[
                  props?.activeLang
                ]
              }
            </a>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default GuestReviews;
