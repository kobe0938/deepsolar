import React from 'react';
import { Link } from 'react-router-dom';

const HomeThreeSingleService = ({ image, title, subtitle }) => {
   return (
      <>
         <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
            <div className="services__item services__item-2 mb-30 transition-3 white-bg">
               <div className="services__icon mb-35">
                  <img src={`assets/img/icon/services/services-${image}.png`} alt="services" />
               </div>
               <div className="services__content services__content-2">
                  <h3><Link to="/servicesDetails">{title}</Link></h3>
                  <p>{subtitle}</p>
               </div>
            </div>
         </div>
      </>
   );
};

export default HomeThreeSingleService;