import React, { useEffect, useState } from "react";
import Blogsidebar from "../layouts/Blogsidebar";
import { Link } from "react-router-dom";
import API from "../../langapi/http";
import ReactPaginate from "react-paginate";
import PageLayout from "../layouts/PageLayout";
import { constants } from "../../utils/constants";
import SEOTags from "../sections/common/SEOTags";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchSections,
  removeSelectedSection,
} from "../../redux/actions/sectionsActions";

const Blog = (props) => {
  const dispatch = useDispatch();
  const activeLang = localStorage.getItem("lang");

  //blog page
  const pageId = "629a0927f08f18452f364ba2";

  useEffect(() => {
    if (activeLang && activeLang !== "" && pageId && pageId !== "")
      dispatch(fetchSections(pageId, activeLang));
    return () => {
      dispatch(removeSelectedSection());
    };
  }, [pageId]);

  const banner = useSelector((state) => state.allSections.sections?.banner);
  const meta = useSelector((state) => state.allSections.sections?.meta);

  //  blog Data

  const [blogData, setBlogData] = useState([]);

  const getBlogData = () => {
    API.get(`/blogs?lang=${activeLang}`)
      .then((response) => {
        const allData = response.data?.data;
        setBlogData(allData);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // recentBlog

  const [recentBlog, setRecentBlog] = useState([]);

  const getRecentData = () => {
    API.get(`/blogs?lang=${activeLang}`)
      .then((response) => {
        const recentData = response.data?.data.sort(
          (a, b) =>
            new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
        );
        setRecentBlog(recentData);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getBlogData();
    getRecentData();
  }, [activeLang]);

  // pagination code

  const [pageNumber, setPageNumber] = useState(0);

  const usersPerPage = 6;
  const pagesVisited = pageNumber * usersPerPage;

  const displayBlogs = blogData
    .slice(pagesVisited, pagesVisited + usersPerPage)
    .map((x, i) => {
      return (
        <div className="post-box mb-40" key={x?._id}>
          <div className="post-media">
            <img
              src={process.env.REACT_APP_IMAGE_BASE_URL + x?.img}
              alt="image"
            />
          </div>
          <div className="post-desc">
            <h2>
              <Link to={`/${activeLang}/blogs/${x?.slug}`}>{x?.title}</Link>
            </h2>
            <ul className="post-meta">
              <li>
                <Link to="#">
                  <i className="far fa-calendar-alt" />
                  {new Date(x?.created_at).toLocaleDateString()}
                </Link>
              </li>
            </ul>
            <p
              dangerouslySetInnerHTML={{
                __html: x?.short_description?.substr(0, 200),
              }}
            ></p>
            <div className="post-footer">
              <div className="author">
                <Link to="#">
                  <i className="fal fa-user mr-2" />
                  {x?.posted_by}
                </Link>
              </div>
              <div className="read-more">
                <Link to={`/${activeLang}/blogs/${x?.slug}`}>
                  <i className="far fa-arrow-right" />
                  {
                    constants?.site_content?.blog_page?.blog_grid?.btn_text[
                      activeLang
                    ]
                  }
                </Link>
              </div>
            </div>
          </div>
        </div>
      );
    });

  const pageCount = Math.ceil(blogData.length / usersPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const breadcrumbItems = [
    {
      text: `${constants?.site_content?.about_page?.bread_crumb?.title[activeLang]}`,
      link: "/",
      isActive: false,
    },
    {
      text: `${constants?.site_content?.blog_page?.bread_crumb?.title2[activeLang]}`,
      link: "/blog",
      isActive: true,
    },
  ];

  return (
    <div>
      <SEOTags meta={meta} />

      {blogData.length > 0 ? (
        <PageLayout
          header={{ isMobile: props.isMobile, isTop: props.isTop }}
          banner={{
            title: banner?.section_name,
            image: banner?.section_avatar?.url,
          }}
          breadCrumb={{ items: breadcrumbItems }}
          activeLang={activeLang}
        >
          {/*====== BLOG SECTION START ======*/}
          <section className="blog-section pt-40 pb-100">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8 col-md-10">
                  <div className="blog-loop">{displayBlogs}</div>

                  <ReactPaginate
                    previousLabel={<i className="far fa-angle-double-left" />}
                    nextLabel={<i className="far fa-angle-double-right" />}
                    pageCount={pageCount}
                    onPageChange={changePage}
                    containerClassName={"paginationBttns"}
                    previousLinkClassName={"previousBttn"}
                    nextLinkClassName={"nextBttn"}
                    disabledClassName={"paginationDisabled"}
                    activeClassName={"paginationActive"}
                  />
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
        </PageLayout>
      ) : (
        <div className={"preloader align-items-center justify-content-center"}>
          <div className="cssload-container">
            <div className="cssload-loading">
              <i />
              <i />
              <i />
              <i />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Blog;
