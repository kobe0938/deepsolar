import React, { useState} from 'react';
import { Link, NavLink } from 'react-router-dom';
import useGlobalContext from '../../../hooks/useGlobalContext';
import Sidebar from '../../../components/Sidebar/Sidebar';

const StyleFiveHeader = () => {

   const [show, setShow] = useState(false);
   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);
   const { stickyMenu } = useGlobalContext();

   return (
      <>
         <header>
            <div className="header__area p-relative header__transparent">
               <div className="header__shape p-absolute">
                  <img src="assets/img/icon/slider/03/icon-5.png" alt=""/>
               </div>
               <div id="header__sticky" className={stickyMenu ? "sticky header__bottom header__bottom-2 header__style-4 header__style-5" : "header__bottom header__bottom-2 header__style-4 header__style-5"}>
                  <div className="container">
                     <div className="row align-items-center">
                        <div className="col-xl-11 col-lg-10 col-md-6 col-sm-6 col-6">
                           <div className="header__style-3-left d-flex align-items-center">
                              <div className="logo-3 mr-50">
                                 <NavLink to="/">
                                    <img src="assets/img/logo/logo-gradient.png" alt="logo"/>
                                 </NavLink>
                              </div>
                              <div className="main-menu main-menu-3 header_style_nav_five">
                                 <nav id="mobile-menu">
                                    <ul>
                                       <li>
                                          <NavLink to="/headerStyleFive">Home</NavLink>
                                          <ul className="submenu">
                                             <li><NavLink to="/home">Home Style 1</NavLink></li>
                                             <li>
                                                <NavLink to="/homeTwo">Home Style 2</NavLink>
                                                <ul className="submenu">
                                                   <li><NavLink to="/home">Home Style 1</NavLink></li>
                                                   <li><NavLink to="/homeTwo">Home Style 2</NavLink></li>
                                                   <li><NavLink to="/homeThree">Home Style 3</NavLink></li>
                                                </ul>
                                             </li>
                                             <li>
                                                <NavLink to="/homeThree">Home Style 3</NavLink>
                                                <ul className="submenu">
                                                   <li><NavLink to="/headerStyleFour">Header Syle 4</NavLink></li>
                                                   <li><NavLink to="/headerStyleFive">Header Syle 5</NavLink></li>
                                                   <li><NavLink to="/headerStyleSix">Header Syle 6</NavLink></li>
                                                   <li><NavLink to="/headerStyleSeven">Header Syle 7</NavLink></li>
                                                </ul>
                                             </li>
                                          </ul>
                                       </li>
                                       <li><NavLink to="/about">About Us </NavLink></li>
                                       <li>
                                          <NavLink to="/services">Services</NavLink>
                                          <ul className="submenu">
                                             <li><NavLink to="/services">Services</NavLink></li>
                                             <li><NavLink to="/servicesDetails">Services Details</NavLink></li>
                                          </ul>
                                       </li>
                                       <li>
                                          <NavLink to="/portfolio">Insights</NavLink>
                                          <ul className="submenu">
                                             <li><NavLink to="/portfolio">portfolio</NavLink></li>
                                             <li><NavLink to="/portfolioDetails">portfolio Details</NavLink></li>
                                             <li><NavLink to="/team">team</NavLink></li>
                                             <li><NavLink to="/teamDetails">team Details</NavLink></li>
                                          </ul>
                                       </li>
                                       <li>
                                          <NavLink to="/blogs">Blog</NavLink>
                                          <ul className="submenu">
                                             <li><NavLink to="/blogs">Blog</NavLink></li>
                                             <li><NavLink to="/blogDetails">Blog Details</NavLink></li>
                                          </ul>
                                       </li>
                                       <li><NavLink to="/contact">Contact Us</NavLink></li>
                                    </ul>
                                 </nav>
                              </div>
                           </div>
                        </div>
                        <div className="col-xl-1 col-lg-2 col-md-6 col-sm-6 col-6">
                           <div className="header__bottom-right d-flex justify-content-end align-items-center">
                              <div className="header__btn d-none d-sm-block d-xl-block ml-50">
                                 <Link to="/contact" className="z-btn z-btn-3">Get a Quote</Link>
                              </div>
                              <div onClick={handleShow} className="sidebar__menu d-lg-none">
                                 <div className="sidebar-toggle-btn sidebar-toggle-btn-3" id="sidebar-toggle">
                                    <span className="line"></span>
                                    <span className="line"></span>
                                    <span className="line"></span>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </header>


         <Sidebar show={show} handleClose={handleClose} />
      </>
   );
};

export default StyleFiveHeader;