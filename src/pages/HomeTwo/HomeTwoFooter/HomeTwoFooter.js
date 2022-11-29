import React from 'react';
import { FaFacebookF, FaTwitter, FaVimeoV, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const HomeTwoFooter = () => {
   const logoAdditionalStlye = {
      width: "50%",
      height: "50%",
     }
   return (
      <>
         {/* <footer>
            <div className="footer__area grey-bg pt-100">
               <div className="footer__top pb-45">
                  <div className="container">
                     <div className="row">
                        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                           <div className="footer__widget mb-45">
                              <div className="footer__widget-title mb-30">
                                 <div className="logo">
                                    <Link to="/">
                                       <img src="assets/img/logo/logo-gradient.png" alt="" style={logoAdditionalStlye}/>
                                    </Link>
                                 </div>
                              </div>
                              <div className="footer__widget-content">
                                 <p className="mb-30">Stanford DeepSolar Project</p>
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
                                       <li><a href="//www.cell.com/joule/fulltext/S2542-4351(18)30570-1">DeepSolar paper</a></li>
                                       <li><a href="//www.cell.com/joule/fulltext/S2542-4351(22)00477-9">DeepSolar++ paper</a></li>
                                       <li><a href="//github.com/wangzhecheng/DeepSolar">DeepSolar code repo</a></li>
                                       <li><a href="//github.com/wangzhecheng/DeepSolar_timelapse">DeepSolar++ code repo</a></li>
                                       <li><a href="//web.stanford.edu/group/energyatlas/home.html">EnergyAtlas project</a></li>
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
                                       <li><a href="//web.stanford.edu/group/magiclab/home.html">Stanford Magic Lab</a></li>
                                       <li><a href="//ramr.sites.stanford.edu/">Stanford Sustainable Systems Lab</a></li>
                                    </ul>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </footer> */}


         <div class="su-local-footer [ modifier_class ]">
          <div class="su-local-footer__header">
            <div class="su-lockup su-lockup--option-a">
              <div class="su-lockup__cell1">
                <div class="su-lockup__wordmark-wrapper">
                  <span class="su-lockup__wordmark">Stanford</span>
                </div>
              </div>
              <div class="su-lockup__cell2">
                <span class="su-lockup__line1">DeepSolar</span>
              </div>
            </div>
            {/* <a href="/login" class="su-link su-link--internal">Web Login</a> */}
          </div>
          <div class="su-local-footer__columns">
            <div class="su-local-footer__cell1">
              <h2 class="su-sr-only-element">Address</h2>
              <address class="su-local-footer__address">
                <strong>Lorem Ipsum Dolar Sit Amet</strong>
                <br />
                473 Via Ortega
                <br />
                Stanford, CA 94305
                <br />
                <a href="email:deepsolar.stanford@gmail.com">deepsolar.stanford@gmail.com</a>
                <br />
              </address>

              <ul class="su-local-footer__action-links">
                <li>
                  <a href="https://campus-map.stanford.edu/">Visit</a>
                </li>
                <li>
                  <a href="https://campus-map.stanford.edu/">Campus Map</a>
                </li>
                <li>
                  <a href="/contact">Contact Us</a>
                </li>
              </ul>
              <ul class="su-local-footer__social-links">
                <li>
                  <a href="#" class="su-local-footer__social-facebook">
                    <i aria-hidden="true"></i>
                    <span>Facebook</span>
                  </a>
                </li>
                <li>
                  <a href="#" class="su-local-footer__social-linkedin">
                    <i aria-hidden="true"></i>
                    <span>LinkedIn</span>
                  </a>
                </li>
                <li>
                  <a href="#" class="su-local-footer__social-twitter">
                    <i aria-hidden="true"></i>
                    <span>Twitter</span>
                  </a>
                </li>
                <li>
                  <a href="#" class="su-local-footer__social-instagram">
                    <i aria-hidden="true"></i>
                    <span>Instagram</span>
                  </a>
                </li>
                <li>
                  <a href="#" class="su-local-footer__social-youtube">
                    <i aria-hidden="true"></i>
                    <span>Youtube</span>
                  </a>
                </li>
              </ul>
            </div>
            <div class="su-local-footer__cell2">
              <nav aria-label="footer primary nav">
                <h2 class="su-local-footer__list-heading">Links to</h2>
                <div className="footer__widget-content">
                  <div className="footer__links">
                    <ul>
                        <li><a href="//www.cell.com/joule/fulltext/S2542-4351(18)30570-1">DeepSolar paper</a></li>
                        <li><a href="//www.cell.com/joule/fulltext/S2542-4351(22)00477-9">DeepSolar++ paper</a></li>
                        <li><a href="//github.com/wangzhecheng/DeepSolar">DeepSolar code repo</a></li>
                        <li><a href="//github.com/wangzhecheng/DeepSolar_timelapse">DeepSolar++ code repo</a></li>
                        <li><a href="//web.stanford.edu/group/energyatlas/home.html">EnergyAtlas project</a></li>
                    </ul>
                  </div>
                </div>
              </nav>
              <nav aria-label="footer secondary nav">
                <h2 class="su-local-footer__list-heading">Resources for</h2>
                  <div className="footer__widget-content">
                      <div className="footer__links">
                        <ul>
                            <li><a href="//web.stanford.edu/group/magiclab/home.html">Stanford Magic Lab</a></li>
                            <li><a href="//ramr.sites.stanford.edu/">Stanford Sustainable Systems Lab</a></li>
                        </ul>
                      </div>
                  </div>
              </nav>
            </div>
            <div class="su-local-footer__cell3">
              {/* <div class="su-signup-form [ modifier_class ]">
                <h2 class="su-local-footer__list-heading">Sign up for our email.</h2>
                <p>Your source for pellentesque leo accumsan ultrices</p>
                <form action="/" method="post">
                  <input type="email" id="su-email" aria-label="email address" name="su-email" placeholder="email address" required="" />
                  <input type="submit" id="su-submit" name="su-submit" value="Sign-up" />
                </form>
              </div> */}
            </div>
          </div>
        </div>





            <div>
          <div class="su-global-footer [ modifier_class ]">
            <div class="su-global-footer__container" title="Common Stanford resources">
                <div class="su-global-footer__brand">
                  <a class="su-logo [ modifier_class ]" href="https://www.stanford.edu">
                    Stanford
                    <br/>
                    University
                  </a>
                </div>
                <div class="su-global-footer__content">
                  <nav aria-label="global footer menu">
                    <ul class="su-global-footer__menu su-global-footer__menu--global">
                      <li>
                        <a href="https://www.stanford.edu">
                          Stanford Home
                          <span class="su-global-footer__link-a11y">(link is external)</span>
                        </a>
                      </li>
                      <li>
                        <a href="https://visit.stanford.edu/plan/">
                          Maps &amp; Directions
                          <span class="su-global-footer__link-a11y">(link is external)</span>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.stanford.edu/search/">
                          Search Stanford
                          <span class="su-global-footer__link-a11y">(link is external)</span>
                        </a>
                      </li>
                      <li>
                        <a href="https://emergency.stanford.edu">
                          Emergency Info
                          <span class="su-global-footer__link-a11y">(link is external)</span>
                        </a>
                      </li>
                    </ul>
                    <ul class="su-global-footer__menu su-global-footer__menu--policy">
                      <li>
                        <a href="https://www.stanford.edu/site/terms/" title="Terms of use for sites">
                          Terms of Use
                          <span class="su-global-footer__link-a11y">(link is external)</span>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.stanford.edu/site/privacy/" title="Privacy and cookie policy">
                          Privacy
                          <span class="su-global-footer__link-a11y">(link is external)</span>
                        </a>
                      </li>
                      <li>
                        <a href="https://uit.stanford.edu/security/copyright-infringement" title="Report alleged copyright infringement">
                          Copyright
                          <span class="su-global-footer__link-a11y">(link is external)</span>
                        </a>
                      </li>
                      <li>
                        <a href="https://adminguide.stanford.edu/chapter-1/subchapter-5/policy-1-5-4" title="Ownership and use of Stanford trademarks and images">
                          Trademarks
                          <span class="su-global-footer__link-a11y">(link is external)</span>
                        </a>
                      </li>
                      <li>
                        <a href="https://studentservices.stanford.edu/more-resources/student-policies/non-academic/non-discrimination" title="Non-discrimination policy">
                          Non-Discrimination
                          <span class="su-global-footer__link-a11y">(link is external)</span>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.stanford.edu/site/accessibility" title="Report web accessibility issues">
                          Accessibility
                          <span class="su-global-footer__link-a11y">(link is external)</span>
                        </a>
                      </li>
                    </ul>
                  </nav>
                  <div class="su-global-footer__copyright">
                    <span>© Stanford University.</span>
                    <span>&nbsp; Stanford, California 94305.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </>
   );
};

export default HomeTwoFooter;