import React, { useEffect, useState } from 'react'
import Blogsidebar from '../layouts/Blogsidebar';
import { Link } from 'react-router-dom';
import API from '../../langapi/http';
import { useParams } from "react-router-dom";
import PageLayout from '../layouts/PageLayout';
import { constants } from '../../utils/constants';
import Helmet from "react-helmet";

const Blogdetails = (props) => {

  const activeLang = localStorage.getItem('lang');

  // single blog Data
  const { id } = useParams();

  useEffect(() => {
    getBlogData();
    getSingleBlogData();
    getRecentData();
  }, [id]);

  const [singleBlogData, setSingleBlogData] = useState([]);

  const getSingleBlogData = () => {
    API.get(`/blogs/${id}?lang=${activeLang}`).then(response => {
      const singleData = response?.data?.data;
      setSingleBlogData(singleData);
    })
      .catch(err => {
        console.log(err)
      })
  }

  //  blog Data

  const [blogData, setBlogData] = useState([]);

  const getBlogData = () => {
    API.get(`/blogs?lang=${activeLang}`).then(response => {
      const allData = response.data?.data.filter((x) => x.slug !== id);
      setBlogData(allData);
    })
      .catch(err => {
        console.log(err)
      })
  }

  // recentBlog

  const [recentBlog, setRecentBlog] = useState([]);

  const getRecentData = () => {
    API.get(`/blogs?lang=${activeLang}`).then(response => {
      const recentData = response.data?.data?.filter((x) => x.slug !== id)?.sort(
        (a, b) =>
          new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
      );
      setRecentBlog(recentData);
    })
      .catch(err => {
        console.log(err)
      })
  }




  const breadcrumbItems = [
    {
      text: `${constants?.site_content?.about_page?.bread_crumb?.title[activeLang]}`,
      link: '/',
      isActive: false,
    },
    {
      text: `${constants?.site_content?.blog_page?.bread_crumb?.title2[activeLang]}`,
      link: '/blog',
      isActive: false,
    },
    {
      text: `${singleBlogData?.title}`,
      link: `/blogs/${singleBlogData?.slug}`,
      isActive: true,
    },
  ]

  return (
    <div>
      <Helmet>
        <title>
          {
            singleBlogData?.title || "Fishermans Cove Resort"
          }
        </title>
        <meta name="description" content={"Fishermans Cove Resort"} />

      </Helmet>
      {
        singleBlogData?.banner_img ?
          <PageLayout
            header={{ isMobile: props.isMobile, isTop: props.isTop }}
            banner={{ title: singleBlogData?.title, image: singleBlogData?.banner_img }}
            breadCrumb={{ items: breadcrumbItems }}
            activeLang={activeLang}
          >

            {/*====== BLOG SECTION START ======*/}
            <section className="blog-section pt-30 pb-60">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-8">
                    <div className="news-details-box">
                      <div className="entry-content">
                        <h2 className="title">
                          {
                            singleBlogData?.title
                          }
                        </h2>
                        <ul className="post-meta">
                          <li><Link to="#"><i className="fal fa-user" />
                            {
                              singleBlogData?.posted_by
                            }
                          </Link></li>
                          <li><Link to="#"><i className="fal fa-calendar-alt" />
                            {new Date(singleBlogData?.created_at).toLocaleDateString()}
                          </Link></li>
                        </ul>
                        <figure className="mt-45 mb-45">
                          <img src={process.env.REACT_APP_IMAGE_BASE_URL + singleBlogData?.img} alt="image" />
                        </figure>
                        <p
                          dangerouslySetInnerHTML={{
                            __html: singleBlogData?.long_description
                          }}
                        >
                        </p>
                      </div>


                      <div className="entry-footer">


                        {/* ----------------------Related Post---------------------- */}

                        {
                          blogData?.length > 0 &&
                          <div className="related-post mt-50">
                            <h3 className="mb-30">
                              {constants?.site_content?.blogInner_page?.related_post?.title[activeLang]}
                            </h3>
                            <div className="row">
                              {
                                blogData?.map((x, i) => (
                                  <div className="col-md-6" key={x?._id}>
                                    <div className="related-post-box mb-50">
                                      <img src={process.env.REACT_APP_IMAGE_BASE_URL + x?.img} alt="img" className='imgstyle' />
                                      {/* <div className="thumb"
                                style={{ backgroundImage: `url( ${x?.img})` }} >
                              </div> */}
                                      <div className="desc">
                                        <Link to={`/${activeLang}/blogs/${x?.slug}`} className="date"><i className="far fa-calendar-alt" />
                                          {new Date(x?.created_at).toLocaleDateString()}
                                        </Link>
                                        <h4><Link to={`/${activeLang}/blogs/${x?.slug}`}>
                                          {x?.title}
                                        </Link></h4>
                                        <p
                                          dangerouslySetInnerHTML={{
                                            __html: x?.short_description?.substr(0, 200)
                                          }}
                                        >
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                ))
                              }
                            </div>
                          </div>
                        }


                        {/* ----------------------Author details---------------------- */}

                        {/* <div className="author-info-box mb-45">
                    <div className="info-text">
                      <span>Written by</span>
                      <h3>
                        {
                          singleBlogData?.posted_by
                        }
                      </h3>
                      <p
                        dangerouslySetInnerHTML={{
                          __html: singleBlogData?.author_details
                        }}
                      >
                      </p>
                    </div>
                  </div> */}
                      </div>
                    </div>
                  </div>
                  {/* Blog Sidebar */}
                  <div className="col-lg-4 col-md-8 col-sm-10">
                    <Blogsidebar
                      recentBlog={recentBlog}
                      activeLang={activeLang}
                    />
                  </div>
                </div>
              </div>
            </section>
            {/*====== BLOG SECTION END ======*/}

          </PageLayout>
          :
          <div className={"preloader align-items-center justify-content-center"}>
            <div className="cssload-container">
              <div className="cssload-loading"><i /><i /><i /><i /></div>
            </div>
          </div>

      }

    </div >

  );
}

export default Blogdetails;
