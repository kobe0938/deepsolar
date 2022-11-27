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
      {/* <div className="su-local-footer [ modifier_class ]">
  <div className="su-local-footer__header">
    <div className="su-lockup su-lockup--option-a">
      <div className="su-lockup__cell1">
        <div className="su-lockup__wordmark-wrapper">
          <span className="su-lockup__wordmark">Stanford</span>
        </div>
      </div>
      <div className="su-lockup__cell2">
        <span className="su-lockup__line1">Vestibellum</span>
      </div>
    </div>
    <a href="/login" className="su-link su-link--internal">Web Login</a>
  </div>
  <div className="su-local-footer__columns">
    <div className="su-local-footer__cell1">
      <h2 className="su-sr-only-element">Address</h2>
      <address className="su-local-footer__address">
        <strong>Lorem Ipsum Dolar Sit Amet</strong>
        <br />
        555 Street Name | Room 555
        <br />
        Stanford, CA 94305
        <br />
        <a href="tel:+16505555555">650-555-5555</a>
        <br />
      </address>
      <ul className="su-local-footer__action-links">
        <li>
          <a href="#">Visit</a>
        </li>
        <li>
          <a href="#">Campus Map</a>
        </li>
        <li>
          <a href="#">Contact Us</a>
        </li>
      </ul>
      <ul className="su-local-footer__social-links">
        <li>
          <a href="#" className="su-local-footer__social-facebook">
            <i aria-hidden="true"></i>
            <span>Facebook</span>
          </a>
        </li>
        <li>
          <a href="#" className="su-local-footer__social-linkedin">
            <i aria-hidden="true"></i>
            <span>LinkedIn</span>
          </a>
        </li>
        <li>
          <a href="#" className="su-local-footer__social-twitter">
            <i aria-hidden="true"></i>
            <span>Twitter</span>
          </a>
        </li>
        <li>
          <a href="#" className="su-local-footer__social-instagram">
            <i aria-hidden="true"></i>
            <span>Instagram</span>
          </a>
        </li>
        <li>
          <a href="#" className="su-local-footer__social-youtube">
            <i aria-hidden="true"></i>
            <span>Youtube</span>
          </a>
        </li>
      </ul>
    </div>
    <div className="su-local-footer__cell2">
      <nav aria-label="footer primary nav">
        <h2 className="su-local-footer__list-heading">Links to</h2>
        <ul className="su-local-footer__primary-links">
          <li>
            <a href="#">lorem ipsum dolor sit amit</a>
          </li>
          <li>
            <a href="#">Vestibellum ultices nueue</a>
          </li>
          <li>
            <a href="#">Blendius tellus</a>
          </li>
          <li>
            <a href="#">Arnen cowalls</a>
          </li>
          <li>
            <a href="#">Finibus</a>
          </li>
        </ul>
      </nav>
      <nav aria-label="footer secondary nav">
        <h2 className="su-local-footer__list-heading">Resources for</h2>
        <ul className="su-local-footer__secondary-links">
          <li>
            <a href="#">Finibus</a>
          </li>
          <li>
            <a href="#">lorem ipsum dolor sit amit</a>
          </li>
          <li>
            <a href="#">Vestibellum ultices nueue</a>
          </li>
          <li>
            <a href="#">Blendius tellus</a>
          </li>
          <li>
            <a href="#">Arnen cowalls</a>
          </li>
        </ul>
      </nav>
    </div>
    <div className="su-local-footer__cell3">
      <div className="su-signup-form [ modifier_class ]">
        <h2 className="su-local-footer__list-heading">Sign up for our email.</h2>
        <p>Your source for pellentesque leo accumsan ultrices</p>
        <form action="/" method="post">
          <input type="email" id="su-email" aria-label="email address" name="su-email" placeholder="email address" required="" />
          <input type="submit" id="su-submit" name="su-submit" value="Sign-up" />
        </form>
      </div>
    </div>
  </div>
</div> */}
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
                                       <img src="assets/img/logo/logo-gradient.png" alt="" style={logoAdditionalStlye}/>
                                    </Link>
                                 </div>
                              </div>
                              <div className="footer__widget-content">
                                 <p className="mb-30">Stanford DeepSolar Project</p>
                                 {/* <p className="mb-30">Copyright © 2022 All Rights Reserved by Stanford DeepSolar Project</p> */}
                                 {/* <div className="footer__social theme-social mb-30">
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
                                 </div> */}
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
                        {/* <div className="col-xl-3 col-lg-3 col-md-5 col-sm-6">
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
                        </div> */}
                     </div>
                  </div>
               </div>
            </div>
         </footer>
      </>
   );
};

export default HomeTwoFooter;