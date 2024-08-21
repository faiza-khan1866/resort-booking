import React, { useEffect, useState } from "react";
import API from "../../../langapi/http";
import Joi from "joi";

const BlackFridayBlock = (props) => {
  const initObj = {
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
  };

  const schema = Joi.object().keys({
    firstName: Joi.string().min(3).required().messages({
      "string.empty": "First name is required",
      "string.min": "First name should be at least 3 characters",
      "any.required": "First name is required",
    }),
    lastName: Joi.string().min(3).required().messages({
      "string.empty": "Last name is required",
      "string.min": "Last name should be at least 3 characters",
      "any.required": "Last name is required",
    }),
    phoneNumber: Joi.string().min(3).required().messages({
      "string.empty": "Phone number is required",
      "string.min": "Phone number is not a valid number",
      "any.required": "Phone number is required",
    }),
    email: Joi.string()
      .required()
      .email({
        minDomainSegments: 2,
        tlds: { allow: ["com", "net"] },
      })
      .messages({
        "any.required": "Email should be valid",
        "string.required": "Email should be valid",
        "string.email": "Email should be valid",
      }),
  });

  const [formData, setFormData] = useState({ ...initObj });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    let data = { ...formData };
    data[e.target.name] = e.target.value;
    setFormData(data);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    const result = schema.validate(formData);
    if (!result["error"]) {
      API.post("/deals", formData)
        .then((response) => {
          if (response.status === 200) {
            alert("Thank you for submitting your interest.");
          }
          setFormData({ ...initObj });
          setIsLoading(false);
        })
        .catch((err) => {
          setIsLoading(false);
          console.log(err);
        });
    } else {
      setIsLoading(false);
      alert(result["error"]["details"][0]["message"]);
    }
  };
  return (
    <div className="main-block">
      <div className="container">
        <div className="inner-block-heading">
          {" "}
          <h2>Get your Access to our Black Friday Weekend Offer now</h2>
        </div>
        <div className="d-flex flex-wrap title-flex">
          <div className="main-item img-wrapper-sale">
            {/* <img alt="" src={props.offerData?.thumbnailPreview} /> */}
            <div className="image-inner-wrapper-sale">
              <img
                alt=""
                src="https://fisherman.b-cdn.net/black-friday/2.jpg"
              />
            </div>
            <div className="clearfix"></div>
            <div className="row">
              <div className="col-md-6 col-6 py-4 pr-3">
                <img
                  className="sub-images-sale"
                  alt=""
                  src="https://fisherman.b-cdn.net/black-friday/11.jpg"
                />
              </div>
              <div className="col-md-6 col-6 py-4 pl-3">
                <img
                  className="sub-images-sale"
                  alt=""
                  src="https://fisherman.b-cdn.net/black-friday/22.jpg"
                />
              </div>
            </div>
          </div>
          <div className="main-item pl-sm-4">
            <div className="reservations-block-sale mt-3">
              <h2>Black Weekend at Fishermans Cove Resort </h2>
              <p>
                <span className="teal">Booking Date :</span> 25,26,27 November
                2022 and <span className="teal">Staying date : </span> Open
                <br />
                <br />
                May we spark some inspiration with you to enjoy paradise
                shopping with us like never before with discounts like never
                before and may you carry along the beautiful memories of this
                Black Friday /Weekend with you.
                <br />
                Now is the time to begin your paradise journey with up to 50%
                off on selected rooms. Limited space.
                <br />
                <br />
                <span className="gold">T&C Apply</span>
                <br />
                <span className="gold">Promo Code:</span> BLACKCOVE
              </p>

              <button
                className="main-btn btn-eden my-4"
                onClick={(e) => {
                  e.preventDefault();
                  window.gtag_report_conversion(
                    "https://be.synxis.com/?Hotel=31842&Chain=27304&promo=BLACKCOVE",
                    true
                  );
                }}
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
        {/* <div className="row">
          <div className="col-md-12">
            <form className="black-firday-form">
              <h3 className="text-center mb-3">
                Pre-register your interest here
              </h3>
              <div className="row">
                <div className="col-md-6 py-2">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="First Name *"
                    onChange={handleChange}
                    name="firstName"
                    value={formData.firstName}
                  />
                </div>
                <div className="col-md-6 py-2">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Last Name *"
                    onChange={handleChange}
                    name="lastName"
                    value={formData.lastName}
                  />
                </div>
                <div className="col-md-6 py-2">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Phone Number *"
                    onChange={handleChange}
                    name="phoneNumber"
                    value={formData.phoneNumber}
                  />
                </div>
                <div className="col-md-6 py-2">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email *"
                    onChange={handleChange}
                    name="email"
                    value={formData.email}
                  />
                </div>
                <div className="col-md-12 text-center">
                  {isLoading ? (
                    <button
                      className="btn btn-primary black-friday-button disabled"
                      type="button"
                    >
                      Sending...
                    </button>
                  ) : (
                    <button
                      className="btn btn-primary black-friday-button"
                      onClick={handleSubmit}
                    >
                      Submit
                    </button>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default BlackFridayBlock;
