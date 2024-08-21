import React from 'react';
import { withRouter } from 'react-router-dom';
import { constants } from '../../../utils/constants';

const AboutServices = (props) => {
  const services = [
    {
      name: `${constants?.site_content?.about_page?.rooms_data?.title[props?.activeLang]}`,
      icon: 'far fa-bed',
      link: '/rooms-suites-seychelles'
    },
    {
      name: `${constants?.site_content?.about_page?.rooms_data?.title2[props?.activeLang]}`,
      icon: 'far fa-utensils',
      link: '/fine-dining-seychelles'
    },
    {
      name: `${constants?.site_content?.about_page?.rooms_data?.title3[props?.activeLang]}`,
      icon: 'far fa-rings-wedding',
      link: '/wedding'
    },
    {
      name: `${constants?.site_content?.about_page?.rooms_data?.title4[props?.activeLang]}`,
      icon: 'far fa-swimmer',
      link: '/whats-on'
    },
  ]
  return (
    <div className='about-services-wrapper bg-light'>
      <div className="container">
        <div className="items-wrapper">
          {
            services.map((x, i) => (
              <div onClick={() => props.history.push(`/${props?.activeLang}${x.link}`)} className={`about-service-item bg-white ${i == services.length - 1 ? 'mr-0' : 'mr-5'} ${i == 0 ? 'ml-0' : 'ml-5'} text-center p-4 d-flex align-items-center flex-column justify-content-center`}>
                <i className={`${x.icon} icon d-block h1`}></i>
                <span className="d-block">{x.name}</span>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default withRouter(AboutServices);