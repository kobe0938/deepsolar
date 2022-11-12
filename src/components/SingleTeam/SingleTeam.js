import React from 'react';
import { FaFacebookF, FaTwitter, FaVimeoV } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SingleTeam = ({image,name,title}) => {
   return (
      <>
         <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="team__item p-relative text-center fix mb-30">
               <div className="team__thumb mb-25">
                  <img src={`assets/img/team/team-${image}.jpg`} alt="team"/>
                     <div className="team__info text-start">
                     <h3><Link to="/teamDetails">{name}</Link></h3>
                        <span>{title}</span>
                     </div>
                     <div className="team__social theme-social">
                        <ul>
                           <li>
                              <a href="#">
                                 <i > <FaFacebookF/> </i>
                                 <i > <FaFacebookF /> </i>
                              </a>
                           </li>
                           <li>
                              <a href="#">
                                 <i > <FaTwitter/> </i>
                                 <i > <FaTwitter /> </i>
                              </a>
                           </li>
                           <li>
                              <a href="#">
                                 <i > <FaVimeoV/> </i>
                                 <i > <FaVimeoV/> </i>
                              </a>
                           </li>
                        </ul>
                     </div>
               </div>
               <div className="team__content">
                  <h3><Link to="/teamDetails">{name}</Link></h3>
                  <span>{title}</span>
               </div>
            </div>
         </div>
      </>
   );
};

export default SingleTeam;