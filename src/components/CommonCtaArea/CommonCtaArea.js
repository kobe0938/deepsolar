import React from 'react';
import { Link } from 'react-router-dom';

const CommonCtaArea = () => {
   return (
      <>
         <section className="cta__area pt-180 pb-155" style={{ background: `url(assets/img/cta/cta-bg.jpeg)`
            , backgroundPosition: 'center', backgroundSize: 'cover' }} >
            <div className="container p-relative">
               <div className="row">
                  <div className="col-xl-10 offset-xl-1">
                     <div className="cta__content text-center">
                        <span >From Deep Solar to Deep Solar++ ...</span>
                        <h1 >Do you have any question? Feel free to contact us</h1>
                        <div className="cta__btn">
                           <Link to="/contact" className="z-btn z-btn-white mb-30">Contact Us</Link>
                           {/* <Link to="/contact" className="z-btn z-btn-transparent mb-30">Work with us</Link> */}
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default CommonCtaArea;