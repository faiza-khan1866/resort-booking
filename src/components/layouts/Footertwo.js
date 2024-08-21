import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { constants } from '../../utils/constants';
import Subscribe from '../sections/common/Subscribe';

class Footertwo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redText: false
    };
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  render() {
    const className = this.state.isTop ? 'active' : '';
    const activeLang = localStorage.getItem('lang');

    return (
      <div>
        {/*====== Back to Top ======*/}
        <Link to="#" className={`back-to-top ${className}`} id="backToTop" onClick={() => this.scrollToTop()}>
          <i className="fal fa-angle-double-up" />
        </Link>
        {/*====== FOOTER START ======*/}
        <div className="container-1">
        </div>
        <footer className={`footer-two ${window.location.pathname === "/" || window.location.pathname === "/en" || window.location.pathname === "/fr" || window.location.pathname === "/de" || window.location.pathname === "/ru" ? "" : " mt-5"}`}>
          <div className="footer-widget-area pt-30 pb-30">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 order-1">
                  <div className="widget site-info-widget mb-50">
                    <Subscribe
                      activeLang={activeLang}
                    />
                  </div>
                </div>
                <div className="col-lg-6 order-3 order-lg-2  footerLinks">
                  {/* Nav Widget */}
                  <div className="widget nav-widget mb-50">
                    <div>
                      <ul>

                        {
                          this.props.footerLinks?.find((x) => x.type === "footer")?.second?.links?.map(x => (
                            <li><Link to={`/${activeLang}/${x.slug}`}>{x.text}</Link></li>

                          ))
                        }

                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="footer-bottom-wrapper py-1">
              <div className="container d-flex flex-wrap justify-content-between align-items-center">
                <div className="py-2 footer-logos">
                  <a href="https://story-hospitality.com/" target='_blank'><img className="px-2" src={require('./../../assets/img/footer/story-hospitality-footer.png')} alt="story-rabat hospitality footer" /></a>
                  <a href="https://www.story-rabat.com/" target='_blank'><img className="px-2" src={require('./../../assets/img/footer/story-rabat-footer.png')} alt="sotry-rabat footer" /></a>
                  <a href="https://www.cue-podgorica.com/" target='_blank'><img className="px-2" src={require('./../../assets/img/footer/cue-hotel-footer.png')} alt="cue hotel footer" /></a>
                  <a href="https://www.hhoteldubai.com/" target='_blank'> <img className="px-2 hhotel-dubai-footer" src={require('./../../assets/img/footer/hhotel-footer.png')} alt="hhotel footer" /></a>
                  <a href="/"><img className="px-2" src={require('./../../assets/img/footer/logo-fisher.png')} alt="fishermanscove footer" /></a>
                </div>
                <div className="social-icons py-2">
                  <a href="https://www.tripadvisor.co.za/Hotel_Review-g1185571-d302667-Reviews-Fisherman_s_Cove_Resort-Beau_Vallon_Mahe_Island.html" target='_blank'>
                    <img className="px-2" style={{ width: "80px" }} src={require('./../../assets/img/footer/tripadvisor.png')} alt="tripAdvisor" />
                  </a>
                  <a href="https://www.facebook.com/fishermanscoveresort/" target='_blank'><i className="fab fa-facebook-f" /></a>
                  <a href="https://twitter.com/fisherman_cove" target='_blank'><i className="fab fa-twitter" /></a>
                  <a href="https://www.instagram.com/fishermanscove.resort/" target='_blank'><i className="fab fa-instagram" /></a>
                </div>
              </div>
            </div>
          </div>

          <div className="copyright-area py-2">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-5 order-2 order-md-1">
                  <p className="copyright-text copyright-two">{constants?.site_content?.footer_content?.copyright_by[activeLang]} @<Link to="#">Fishermans Cove Resort</Link> - {new Date().getFullYear()}</p>
                </div>
                <div className="col-lg-6 col-md-7 order-1 order-md-2">
                  <div className="footer-menu text-center text-md-right">
                    <ul>
                      <p style={{ fontSize: '14px' }}> {constants?.site_content?.footer_content?.powered_by[activeLang]} <a href="https://prismdigital.ae" style={{ color: "white" }} >Prism Digital</a>.</p>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
        {/*====== FOOTER END ======*/}
      </div>
    );
  }
}

export default Footertwo;
