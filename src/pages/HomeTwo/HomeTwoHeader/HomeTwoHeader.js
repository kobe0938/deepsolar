import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Sidebar from '../../../components/Sidebar/Sidebar';
import useGlobalContext from '../../../hooks/useGlobalContext';

const HomeTwoHeader = () => {
   const [show, setShow] = useState(false);
   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);
   const { stickyMenu } = useGlobalContext();

   const logoAdditionalStlye = {
      width: "50%",
      height: "50%",
     }
   return (
      <>
         {/* <header>
            <div className="header__area p-relative header__transparent">
               <div id="header__sticky" className={stickyMenu ? 'sticky header__bottom header__bottom-2' : 'header__bottom header__bottom-2'}>
                  <div className="container">
                     <div className="row align-items-center">
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
                           <div className="logo" >
                              <NavLink to="/">
                                 <img src="assets/img/logo/logo.png" alt="logo" style={logoAdditionalStlye}/>
                              </NavLink>
                           </div>
                           <div className="logo-gradient">
                              <NavLink to="/">
                                 <img src="assets/img/logo/logo.png" alt="logo" style={logoAdditionalStlye}/>
                              </NavLink>
                           </div>
                        </div>
                        <div className="col-xl-9 col-lg-9 col-md-6 col-sm-6 col-6">
                           <div className="header__bottom-right d-flex justify-content-end align-items-center">
                            <div className="main-menu menu_wrapper_one">
                                 <nav id="mobile-menu">
                                    <ul>
                                       <li>
                                          <NavLink to="/home">Home</NavLink>
                                       </li>
                                       <li><NavLink to="/team">People </NavLink></li>
                                       <li>
                                          <NavLink to="/interactiveMap">Interactive Map</NavLink>
                                       </li>
                                       <li>
                                          <NavLink to="/comparisonMap">Comparison Map</NavLink>
                                       </li>
                                       <li><NavLink to="/dataAnalytics">Data Analytics</NavLink></li>
                                    </ul>
                                 </nav>
                              </div>
                              <div className="header__btn d-none d-sm-block d-xl-block ml-50">
                                 <Link to="/contact" className="z-btn z-btn-white z-btn-white-2">Contact Us</Link>
                              </div>
                              <div onClick={handleShow} className="sidebar__menu d-lg-none">
                                 <div className="sidebar-toggle-btn" id="sidebar-toggle">
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
         </header> */}

      <section class="su-masthead [ modifier_class ]">
         <a href="#main-content" class="su-skiplinks ">Skip to main content</a>
         <div class="su-brand-bar ">
            <div class="su-brand-bar__container">
               <a class="su-brand-bar__logo" href="https://stanford.edu">
               Stanford University
               <span class="su-brand-bar__link--a11y">(link is external)</span>
               </a>
            </div>
         </div>
         <section>
            <div class="su-lockup su-lockup--option-d">
               <a href="/">
               <div class="su-lockup__cell1">
                  <div class="su-lockup__wordmark-wrapper">
                     <span class="su-lockup__wordmark">Stanford</span>
                  </div>
               </div>
               <div class="su-lockup__cell2">
                  <span class="su-lockup__line1">DeepSolar</span>
                  {/* <span class="su-lockup__line3">Stanford's Official Styleguide</span> */}
               </div>
               </a>
            </div>
            <div class="su-site-search " role="search">
               <form action="https://www.stanford.edu/search" method="get" accept-charset="UTF-8">
               <label class="su-site-search__sr-label" for="search-field">Search this site</label>
               <input type="text" id="search-field" name="search-field" class="su-site-search__input" placeholder="Search this site" maxlength="128" />
               <button type="submit" name="search" class="su-site-search__submit su-sr-only-text">Submit Search</button>
               </form>
            </div>
            <nav class="su-main-nav no-js su-main-nav--mobile-search" aria-label="main menu">
               <button class="su-main-nav__toggle su-main-nav__toggle--light" aria-expanded="false" aria-label="expand menu">Menu</button>
               <ul class="su-main-nav__menu-lv1">
               <li class=" ">
                  <a href="/">Home</a>
               </li>
               <li><NavLink to="/team">Team</NavLink></li>
               <li class="su-main-nav__item--parent ">
                  <a href="#" aria-expanded="false">Maps</a>
                  <ul class="su-main-nav__menu-lv2">
                     <li class="">
                     <NavLink to="/interactiveMap">Interactive Map</NavLink>
                     </li>
                     <li class="">
                     <NavLink to="/comparisonMap">Comparison Map</NavLink>
                     </li>
                  </ul>
               </li>
               <li class=" ">
               <NavLink to="/dataAnalytics">Data Analytics</NavLink>
               </li>
               <li class=" ">
               <Link to="/contact">Contact Us</Link>
               </li>
               </ul>
               <div class="su-site-search " role="search">
               <form action="" method="" accept-charset="UTF-8">
                  <label class="su-site-search__sr-label" for="search-field">Search this site</label>
                  <input type="text" id="search-field" name="search-field" class="su-site-search__input" placeholder="Search this site" maxlength="128" />
                  <button type="submit" name="search" class="su-site-search__submit su-sr-only-text">Submit Search</button>
               </form>
               </div>
            </nav>
         </section>
         </section>

         <Sidebar show={show} handleClose={handleClose} />
      </>
   );
};

export default HomeTwoHeader;