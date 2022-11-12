import { CgArrowLongRight } from 'react-icons/cg';
import { Link } from 'react-router-dom';

const HomeTwoSingleBlog = ({date,name,desc}) => {
   return (
      <>
         <div className="col-xl-4 col-lg-4 col-md-6">
            <div className="blog__item p-relative fix mb-30 white-bg">
               <div className="blog__thumb" style={{background: `url(assets/img/blog/blog-1.jpg)` , backgroundPosition: 'center', backgroundSize: 'cover' }} ></div>
               <div className="blog__content">
                  <div className="blog__meta date mb-45">
                     <h4>{date}</h4>
                     <h6>Dec 2018</h6>
                  </div>
                  <div className="blog__meta user mb-15">
                     <span>By <Link to="/blogDetails">{name}</Link></span>
                  </div>
                  <h3>
                     <Link to="/blogDetails">{desc}</Link>
                  </h3>
                  <div className="blog__btn">
                     <a href="https://google.com" className="link-btn-2" target="_blank" rel="noreferrer">
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