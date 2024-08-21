import React from 'react';
import { Link } from 'react-router-dom';

const BreadCrumb = (props) => {
  return (
    <div className="container">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          {
            props.items?.map((x, i) => (
              <li class={`breadcrumb-item ${x.isActive ? 'active' : ''}`} aria-current={`${x.isActive ? 'page' : 'false'}`}>
                <Link to={`/${props?.activeLang}${x.link}`}>{x.text}</Link>
              </li>
            ))
          }
        </ol>
      </nav>
    </div>
  );
}

export default BreadCrumb;