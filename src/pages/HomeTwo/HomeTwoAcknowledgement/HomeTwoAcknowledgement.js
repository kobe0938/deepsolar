import React from 'react';
import SingleExpartContent from '../../../components/SingleExpartContent/SingleExpartContent';
import HomeTwoSingleBlog from '../../../components/HomeTwoSingleBlog/HomeTwoSingleBlog';

const HomeTwoAcknowledgement = () => {
   const sponsor1 = 'http://www.cei.washington.edu/wp-content/uploads/2020/01/seto-logo-square.jpg';
   const sponsor2 = 'assets/img/sponsor/pie-logo-v2.png';
   return (
      <>
         <section className="blog__area grey-bg-15 pt-115 pb-135">
            <div className="container">
               <div className="row">
                  <div className="col-xl-5">
                     <div className="section__title section__title-3 mb-65">
                        <h2>Acknowledgement</h2>
                     </div>
                  </div>
               </div>

               <div className="row">
                  <div className="col-xl-5">
                     <div className="section__title section__title-3 mb-65">
                        <img src={sponsor1} alt=""/>
                     </div>
                  </div>
                  <div className="col-xl-2">
                     <div className="section__title section__title-3 mb-65">
                     </div>
                  </div>
                  <div className="col-xl-5">
                     <div className="section__title section__title-3 mb-65">
                        <img src={sponsor2} alt=""/>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default HomeTwoAcknowledgement;