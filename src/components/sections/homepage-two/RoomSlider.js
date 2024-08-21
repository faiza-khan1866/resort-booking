import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { withRouter } from 'react-router-dom';
import { constants } from '../../../utils/constants';

const RoomSlider = (props) => {

    return (
        <div className="room-slider-wrapper">
            <h2 className="section-heading text-muted">
                {constants?.site_content?.home_page?.rooms_slider?.title[props?.activeLang]}
            </h2>
            <Carousel
                dynamicHeight={false}
                showStatus={false}
                showArrows={true}
                showIndicators={false}
                showThumbs={false}
                infiniteLoop={true}
                autoPlay={true}
                centerMode
                stopOnHover={false}
                centerSlidePercentage={70}
                className="room-carousel center"
                interval={6000}
            >
                {
                    props.data?.map(x => (
                        <div>
                            <div className="room-image-wrapper">
                                <img src={process.env.REACT_APP_IMAGE_BASE_URL + x.thumbnailPreview} alt="room image" />
                            </div>
                            <div className="slide-content py-3">
                                <h1 style={{ cursor: 'pointer' }} onClick={() => props.history.push(`/${props?.activeLang}/rooms/${x.slug}`)}>{x.post_name}</h1>
                                <div dangerouslySetInnerHTML={{ __html: x.short_description }}>
                                </div>
                                <button
                                    className="main-btn btn-eden my-4"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        window.gtag_report_conversion(x.post_url, true)
                                    }}
                                >
                                    {constants?.site_content?.home_page?.banner?.btn3[props?.activeLang]}
                                </button>
                            </div>
                        </div>
                    ))
                }
            </Carousel>
        </div>
    );
}

export default withRouter(RoomSlider);