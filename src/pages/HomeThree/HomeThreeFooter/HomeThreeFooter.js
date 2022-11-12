import React from 'react';
import { FaEnvelope, FaFacebookF, FaPhoneAlt, FaTwitter, FaVimeoV } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const HomeThreeFooter = () => {
   return (
      <>
         <footer>
            <div className="footer__area grey-bg pt-100">
               <div className="footer__top pb-45">
                  <div className="container">
                     <div className="row">
                        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 pr-0">
                           <div className="footer__widget mb-45 wow fadeInUp" data-wow-delay=".2s">
                              <div className="footer__widget-title mb-30">
                                 <div className="logo">
                                    <a href="#">
                                       <img src="assets/img/logo/logo-black.png" alt=""/>
                                    </a>
                                 </div>
                              </div>
                              <div className="footer__widget-content">
                                 <p>Why I say old chap that is spiffing bodge, blag pardon me buggered mufty Oxford butty bubble.</p>
                                 <div className="footer__img">
                                    <img src="assets/img/footer/footer-img-1.png" alt=""/>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="col-xl-2 offset-xl-1 col-lg-2 offset-lg-1 col-md-4 col-sm-6">
                           <div className="footer__widget footer__widget-3 mb-45 wow fadeInUp" data-wow-delay=".4s">
                              <div className="footer__widget-title">
                                 <h4>Company</h4>
                              </div>
                              <div className="footer__widget-content">
                                 <div className="footer__links">
                                    <ul>
                                       <li><a href="#">About Us</a></li>
                                       <li><a href="#">Testimonials</a></li>
                                       <li><a href="#">Consulting</a></li>
                                       <li><a href="#">Partners</a></li>
                                       <li><a href="#">Contact Us</a></li>
                                    </ul>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="col-xl-2 offset-xl-1 col-lg-2 offset-lg-1 col-md-4 col-sm-6">
                           <div className="footer__widget mb-45 wow fadeInUp" data-wow-delay=".6s">
                              <div className="footer__widget-title">
                                 <h4>Resources</h4>
                              </div>
                              <div className="footer__widget-content">
                                 <div className="footer__links">
                                    <ul>
                                       <li><a href="#">Customers</a></li>
                                       <li><a href="#">Pricing</a></li>
                                       <li><a href="#">News</a></li>
                                       <li><a href="#">Learning Center</a></li>
                                       <li><a href="#">Help desk</a></li>
                                       <li><a href="#">Support</a></li>
                                    </ul>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="col-xl-3  col-lg-3 col-md-4 col-sm-6">
                           <div className="footer__widget footer__widget-3 mb-45  ml-70 wow fadeInUp" data-wow-delay=".8s">
                              <div className="footer__widget-title">
                                 <h4>Information</h4>
                              </div>
                              <div className="footer__widget-content">
                                 <div className="footer__info mb-35">
                                    <ul>
                                       <li>
                                          <div className="icon theme-color ">
                                             <i> <FaEnvelope/> </i>
                                          </div>
                                          <div className="text theme-color ">
                                             <span><a href=""></a></span>
                                          </div>
                                       </li>
                                       <li>
                                          <div className="icon theme-color">
                                             <i > <FaPhoneAlt/> </i>
                                          </div>
                                          <div className="text theme-color">
                                             <span><a href="tel:(+642)-394-396-432">(+642) 394 396 432</a></span>
                                          </div>
                                       </li>
                                    </ul>
                                 </div>
                                 <div className="footer__social theme-social">
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
                                          <a href="#">
                                             <i ><FaVimeoV /> </i>
                                             <i ><FaVimeoV /> </i>
                                          </a>
                                       </li>
                                    </ul>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="footer__copyright-3">
                  <div className="container">
                     <div className="footer__copyright-inner">
                        <div className="row align-items-center">
                           <div className="col-xl-12">
                              <div className="footer__copyright-text text-center">
                                 <p>Copyright © 2022 All Rights Reserved passion by <Link to="/home">Theme_Pure</Link></p>
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

export default HomeThreeFooter;