import React from 'react';
import { Link } from 'react-router-dom';

const SIngleContactInfo = ({image,title,btn_text}) => {
   return (
      <>
         <div className="col-xl-5 col-lg-6 col-md-6 offset-xl-1">
            <div className="contact__help-item white-bg text-center mb-30 wow fadeInLeft" data-wow-delay=".3s">
               <div className="contact__icon mb-35">
                  <img src={`assets/img/icon/contact/${image}.png`} alt="" />
               </div>
               <div className="contact__text">
                  <h3>{title}</h3>
                  <p>Naff the wireless barney bodge lurgy cuppa cheeky.</p>
                  <Link to="/contact" className="z-btn z-btn-border">{btn_text}</Link>
               </div>
            </div>
         </div>
      </>
   );
};

export default SIngleContactInfo;