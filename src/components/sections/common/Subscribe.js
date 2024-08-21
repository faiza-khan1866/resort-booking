import { CircularProgress } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import API from './../../../langapi/http';
import { constants } from '../../../utils/constants';
import axios from "axios";

const Subscribe = ({ activeLang }) => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [state, setState] = useState({});

  const getGeoInfo = () => {
    axios
      .get("https://ipapi.co/json/")
      .then((response) => {
        let data = response?.data;
        setState(response?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getGeoInfo();
  }, []);

  const handleSubmit = () => {

    window.revFormOnSubmit();

    // if (email === "" || !email) {
    //   alert(`${constants?.site_content?.about_page?.subscribe?.email_error[activeLang]}`);
    //   return;
    // }
    // setIsLoading(true);

    // API.post('/subscribe', JSON.stringify({ email }), {
    //   headers: {
    //     'Content-Type': 'application/json'
    //   }
    // }).then(response => {
    //   if (response.status === 200 || response.status === 201) {
    //     setIsLoading(false);
    //     setEmail('');
    //     alert(`${constants?.site_content?.about_page?.subscribe?.submit_text[activeLang]}`);
    //   }
    // }).catch(error => {
    //   setIsLoading(false);
    //   console.log(error)
    // });
  }

  return (
    <footer>
      <div className="footer-subscibe-area">
        <h1 className="subscribe-title">
          {constants?.site_content?.about_page?.subscribe?.title[activeLang]}
        </h1>
        <div className="subscribe-text text-center">
          <p>
            {constants?.site_content?.about_page?.subscribe?.subtitle[activeLang]}
          </p>
          <form id="revinate_contact_api_form" className="mt-20" token={state?.country_code === "SC" ? 'de86ec9f-a56b-4022-8f6b-ec92a455469e' : '833d33eb-6107-4d80-adc1-c6ede94f7cc3'}>
            <fieldset>
              {/* <legend> Revinate Contact Sign Up Form Sample.</legend> */}
              <div style={{ display: 'flex', }}>
                <input type="text" name="firstName" placeholder={constants?.site_content?.about_page?.subscribe?.first_name_place_holder[activeLang]} required />
                <input type="text" name="lastName" placeholder={constants?.site_content?.about_page?.subscribe?.last_name_place_holder[activeLang]} required />
              </div>

              <div>
                <input class="long" type="email" name="email" placeholder={constants?.site_content?.about_page?.subscribe?.place_holder[activeLang]} required />
              </div>

              <div>
                <input class="long" type="text" name="country" placeholder={constants?.site_content?.about_page?.subscribe?.country_name_place_holder[activeLang]} required />
              </div>

              <div class="button">
                <button type="submit" class="submit_button_footer" onClick={handleSubmit}>{constants?.site_content?.about_page?.subscribe?.btn_text[activeLang]}</button>
              </div>

            </fieldset>

          </form>
          {/* <form action="#" className="subscribe-form mt-20">
            {
              isLoading ? <CircularProgress style={{ color: "white" }} /> :
                <>
                  <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required
                    placeholder={constants?.site_content?.about_page?.subscribe?.place_holder[activeLang]} />
                  <button type="button" onClick={handleSubmit}>
                    {constants?.site_content?.about_page?.subscribe?.btn_text[activeLang]}
                  </button>
                </>
            }
          </form> */}
        </div>
      </div>
    </footer>
  );
}

export default Subscribe;
