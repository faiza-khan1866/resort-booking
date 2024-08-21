import React, { useState } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import API from '../../../langapi/http';
import { constants } from '../../../utils/constants';


const ContactUsForm = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    if (firstName === "" || firstName === null) {
      alert(`${constants?.site_content?.contact_page?.contact_form?.name_error[props?.activeLang]}`);
      return;
    }
    if (lastName === "" || lastName === null) {
      alert(`${constants?.site_content?.contact_page?.contact_form?.Last_name_error[props?.activeLang]}`);
      return;
    }
    if (email === "" || email === null) {
      alert(`${constants?.site_content?.contact_page?.contact_form?.email_error[props?.activeLang]}`);
      return;
    }
    if (subject === "" || subject === null) {
      alert(`${constants?.site_content?.contact_page?.contact_form?.subject_error[props?.activeLang]}`);
      return;
    }
    if (message === "" || message === null) {
      alert(`${constants?.site_content?.contact_page?.contact_form?.msg_error[props?.activeLang]}`);
      return;
    }
    setIsLoading(true);
    API.post('/contact', JSON.stringify({ fName: firstName, lName: lastName, email, subject, message }), {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => {
      if (response.status == 200) {
        setIsLoading(false);

        setFirstName('');
        setLastName('');
        setEmail('');
        setSubject('');
        setMessage('');
        alert(`${constants?.site_content?.contact_page?.contact_form?.submit_text[props?.activeLang]}`);
      }
    }).catch(error => {
      setIsLoading(false);
      console.log(error)
    });
  }

  return (
    <div className="contact-form">
      <div className="container">
        <h3 className="text-center p-0">
          {constants?.site_content?.contact_page?.contact_form?.title[props?.activeLang]}
        </h3>
        <form action="#">
          <div className="w-75 mx-auto">
            <div className="row">
              <div className="col-md-6 my-2">
                <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)}
                  placeholder={constants?.site_content?.contact_page?.contact_form?.first_name[props?.activeLang]} />
              </div>
              <div className="col-md-6 my-2">
                <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)}
                  placeholder={constants?.site_content?.contact_page?.contact_form?.last_name[props?.activeLang]} />
              </div>
              <div className="col-md-6 my-2">
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                  placeholder={constants?.site_content?.contact_page?.contact_form?.email[props?.activeLang]} />
              </div>
              <div className="col-md-6 my-2">
                <select value={subject} onChange={(e) => setSubject(e.target.value)}>
                  <option value="">{constants?.site_content?.contact_page?.contact_form?.choose_subject[props?.activeLang]}</option>
                  <option value="reservation">{constants?.site_content?.contact_page?.contact_form?.choose_subject1[props?.activeLang]}</option>
                  <option value="refund">{constants?.site_content?.contact_page?.contact_form?.choose_subject2[props?.activeLang]}</option>
                  <option value="rooms">{constants?.site_content?.contact_page?.contact_form?.choose_subject3[props?.activeLang]}</option>
                </select>
              </div>
              <div className="col-md-12 mt-2">
                <textarea type="text" value={message} onChange={(e) => setMessage(e.target.value)}
                  placeholder={constants?.site_content?.contact_page?.contact_form?.msg[props?.activeLang]} rows={3} >

                </textarea>
              </div>
              <div className="col-12 text-center py-2 mt-2">
                {
                  isLoading ? <CircularProgress /> :
                    <button type="button" onClick={handleSubmit} className="main-btn btn-filled">
                      {constants?.site_content?.contact_page?.contact_form?.btn_text[props?.activeLang]}
                    </button>
                }
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactUsForm;