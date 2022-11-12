import React from 'react';
import HomeTwoSingleBlog from '../../../components/HomeTwoSingleBlog/HomeTwoSingleBlog';
import { CgArrowLongRight } from 'react-icons/cg';
import { Link } from 'react-router-dom';

const HomeTwoBlogs = () => {
   return (
      <>
         <section className="blog__area grey-bg-15 pt-115 pb-135">
            <div className="container">
               <div className="row">
                  <div className="col-xl-5">
                     <div className="section__title section__title-3 mb-65">
                        <span>Latest News</span>
                        <h2>Latest deep solar news and announcements.</h2>
                     </div>
                  </div>
               </div>
               <div className="row">

                  <HomeTwoSingleBlog date="24" name="Stanford News" desc="The Start-Up Ultimate Guide to Make Your WordPress Journal." />
                  <HomeTwoSingleBlog date="12" name="Stanford News" desc="The Start-Up Ultimate Guide to Make Your WordPress Journal." />
                  <HomeTwoSingleBlog date="10" name="Stanford News" desc="The Start-Up Ultimate Guide to Make Your WordPress Journal." />
                  <HomeTwoSingleBlog date="10" name="Stanford News" desc="The Start-Up Ultimate Guide to Make Your WordPress Journal." />

               </div>
               {/* <div className="row">
                  <div className="col-xl-12">
                     <div className="blog__more mt-60">
                        <Link to="/blogs" className="z-btn z-btn-border">View all News
                           <i > <CgArrowLongRight /> </i>
                        </Link>
                     </div>
                  </div>
               </div> */}
            </div>
         </section>
      </>
   );
};

export default HomeTwoBlogs;