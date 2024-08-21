import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { constants } from '../../../utils/constants';
import ReactWOW from 'react-wow';

class AboutSecondaryTextBlock extends Component {
  render() {
    return (
      <>
        <h2 className="section-heading text-muted">
          {constants?.site_content?.about_page?.sec_text_box?.title[this.props?.activeLang]}
        </h2>
        <section className="text-block pt-100">
          <div className="container">
            <ReactWOW animation="fadeInLeft" data-wow-delay=".3s">
              <div className="row align-items-center1 justify-content-space-between bg-div">
                <div className="col-lg-6">
                  <div className="text-img text-center text-lg-left mb-3 image-wrapper">
                    <img src={process.env.REACT_APP_IMAGE_BASE_URL + this.props.data?.section_avatar?.url} alt="" />
                  </div>
                </div>
                <ReactWOW animation="fadeInRight" data-wow-delay=".5s">
                  <div className="col-lg-6 col-md-8 col-sm-10">
                    <div className="block-text h-100 d-flex flex-column justify-content-between align-items-start">
                      <div className="section-title mb-10">
                        <h1>
                          {this.props.data?.section_name}
                        </h1>
                      </div>
                      <p className="text-justify my-1" dangerouslySetInnerHTML={{ __html: this.props.data?.section_content }}>
                      </p>
                      <Link to={`/${this.props?.activeLang}/fine-dining-seychelles`} className="main-btn btn-filled mt-40" style={{ background: '#183254', borderColor: '#183254' }}>
                        {constants?.site_content?.home_page?.banner?.btn2[this.props?.activeLang]}
                      </Link>
                    </div>
                  </div>
                </ReactWOW>
              </div>
            </ReactWOW>
          </div>
        </section>
      </>
    );
  }
}

export default AboutSecondaryTextBlock;
