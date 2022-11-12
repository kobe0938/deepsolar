import React from 'react';
import { FaFacebookF, FaTwitter, FaVimeoV, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const HomeTwoFooter = () => {
   return (
      <>
         <footer>
            <div className="footer__area grey-bg pt-100">
               <div className="footer__top pb-45">
                  <div className="container">
                     <div className="row">
                        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                           <div className="footer__widget mb-45">
                              <div className="footer__widget-title mb-30">
                                 <div className="logo">
                                    <Link to="/">
                                       <img src="assets/img/logo/logo-gradient.png" alt=""/>
                                    </Link>
                                 </div>
                              </div>
                              <div className="footer__widget-content">
                                 <p className="mb-30">Stanford Deep Solar Group</p>
                                 {/* <p className="mb-30">Copyright © 2022 All Rights Reserved passion by Theme_Pure</p> */}
                                 <div className="footer__social theme-social mb-30">
                                    <ul>
                                       <li>
                                          <a href="#">
                                             <i ><FaFacebookF /></i>
                                             <i ><FaFacebookF /></i>
                                          </a>
                                       </li>
                                       <li>
                                          <a href="#">
                                             <i ><FaTwitter /> </i>
                                             <i ><FaTwitter /> </i>
                                          </a>
                                       </li>
                                       <li>
                                          <a href="https://github.com/wangzhecheng/DeepSolar">
                                             <i ><FaGithub /> </i>
                                             <i ><FaGithub /> </i>
                                          </a>
                                       </li>
                                    </ul>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 offset-xl-1">
                           <div className="footer__widget mb-45">
                              <div className="footer__widget-title">
                                 <h4>Useful Links</h4>
                              </div>
                              <div className="footer__widget-content">
                                 <div className="footer__links">
                                    <ul>
                                       <li><a href="#">Joule paper</a></li>
                                       <li><a href="#">Code on Github</a></li>
                                       <li><a href="#">DeepSolar database (census tract level)</a></li>
                                       <li><a href="#">DeepSolar database metadata</a></li>
                                       <li><a href="#">EnergyAtlas project</a></li>
                                    </ul>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 offset-xl-1">
                           <div className="footer__widget mb-45">
                              <div className="footer__widget-title">
                                 <h4>Reserch Groups</h4>
                              </div>
                              <div className="footer__widget-content">
                                 <div className="footer__links">
                                    <ul>
                                       <li><a href="#">Stanford Magic Lab</a></li>
                                       <li><a href="#">Stanford Sustainable Systems Lab</a></li>
                                    </ul>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-5 col-sm-6">
                           <div className="footer__widget mb-45">
                              <div className="footer__widget-title">
                                 <h4>Newsletter</h4>
                              </div>
                              <div className="footer__widget-content">
                                 <div className="footer__subscribe">
                                    <p className="mb-30">Subscribe to out newsletter today to receive updates on the latest news</p>
                                    <div className="footer__subscribe-form p-relative">
                                       <form action="#">
                                          <input type="email" placeholder="Email Address"/>
                                             <button type="submit">Subscribe</button>
                                       </form>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </footer>
      </>
   );
};

export default HomeTwoFooter;