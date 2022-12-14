import { CgArrowLongRight } from 'react-icons/cg';
import { Link } from 'react-router-dom';

const HomeTwoSingleBlog = ({monthYear,date,publisher,desc,href}) => {
   return (
      <>
         <div className="col-xl-4 col-lg-4 col-md-6">
            <div className="blog__item p-relative fix mb-30 white-bg">
               <div className="blog__thumb" style={{background: `url(assets/img/blog/blog-1.jpg)` , backgroundPosition: 'center', backgroundSize: 'cover' }} ></div>
               <div className="blog__content">
                  <div className="blog__meta date mb-45">
                     <h4>{date}</h4>
                     <h6>{monthYear}</h6>
                  </div>
                  <div className="blog__meta user mb-15">
                     <span>{publisher}</span>
                  </div>
                  <h3>
                     <Link to="/blogDetails">{desc}</Link>
                  </h3>
                  <div className="blog__btn">
                     <a href={href} className="link-btn-2" rel="noreferrer">
                     {/* option to open a new tab: target="_blank" */}
                     Read More
                           <i > <CgArrowLongRight /> </i>
                           <i > <CgArrowLongRight /> </i>
                     </a>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default HomeTwoSingleBlog;