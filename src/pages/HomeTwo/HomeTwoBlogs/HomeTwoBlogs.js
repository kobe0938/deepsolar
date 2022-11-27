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
                        {/* <span>Latest News111</span> */}
                        <h2>Latest News</h2>
                     </div>
                  </div>
               </div>
               <div className="row">

                  <HomeTwoSingleBlog monthYear="Nov 2022" date="15" publisher="by Joule" desc="Our DeepSolar++ paper is published at Joule." href="https://www.cell.com/joule/fulltext/S2542-4351(22)00477-9"/>
                  <HomeTwoSingleBlog monthYear="Apr 2022" date="22" publisher="" desc="We hosted the DeepSolar Technical Advisory Committee Meeting." href="/"/>
                  <HomeTwoSingleBlog monthYear="Sep 2020" date="07" publisher="" desc="A new model is developed for mapping solar PV installations in Germany." href="https://ieeexplore.ieee.org/abstract/document/9203258"/>
                  <HomeTwoSingleBlog monthYear="Dec 2018" date="19" publisher="by Stanford News" desc="Our DeepSolar work is covered by Stanford News." href="https://news.stanford.edu/2018/12/19/inventory-indicates-goes-solar/"/>
                  <HomeTwoSingleBlog monthYear="Dec 2018" date="19" publisher="by Joule" desc="Our DeepSolar paper is published at Joule." href="https://www.cell.com/joule/fulltext/S2542-4351(18)30570-1"/>

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