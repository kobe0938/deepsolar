import React from 'react';
import { BiMap } from 'react-icons/bi';
import { FaEnvelope, FaFacebookF, FaPhoneAlt, FaTwitter, FaVimeoV } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const TeamDetailsArea = () => {
   return (
      <>
         <section className="team__details pt-120 pb-160">
            <div className="container">
               <div className="team__details-inner p-relative white-bg">
                  <div className="team__details-shape p-absolute">
                     <img src="assets/img/icon/team/shape-1.png" alt=""/>
                  </div>
                  <div className="row">
                     <div className="col-xl-6 col-lg-6">
                        <div className="team__details-img w-img mr-70">
                           <img src="assets/img/team/details/team-01.jpg" alt=""/>
                        </div>
                     </div>
                     <div className="col-xl-6 col-lg-6">
                        <div className="team__details-content pt-105">
                           <span>UI/UX Designer</span>
                           <h3>Parsley Montana</h3>
                           <p>So I said on your bike mate easy peasy dropped a clanger blow  porkies is fantastic show off show.!</p>
                           <div className="team__details-contact mb-45">
                              <ul>
                                 <li>
                                    <div className="icon theme-color ">
                                       <i > <FaEnvelope/> </i>
                                    </div>
                                    <div className="text theme-color ">
                                       <span><a href="">support</a></span>
                                    </div>
                                 </li>
                                 <li>
                                    <div className="icon theme-color">
                                       <i ><FaPhoneAlt /> </i>
                                    </div>
                                    <div className="text theme-color">
                                       <span><a href="tel:(+642)-394-396-432">(+642) 394 396 432</a></span>
                                    </div>
                                 </li>
                                 <li>
                                    <div className="icon">
                                       <i > <BiMap /> </i>
                                    </div>
                                    <div className="text">
                                       <span>Ave 14th Street, Mirpur 210, <br/> San Franciso, USA 3296.</span>
                                    </div>
                                 </li>
                              </ul>
                           </div>
                           <div className="team__details-social theme-social" >
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
               <div className="row">
                  <div className="col-xl-10 offset-xl-1">
                     <div className="team__details-info mt-60">
                        <h4 >Information</h4>
                        <p >jolly good codswallop what a plonker he nicked it bog-standard porkies gosh the full monty, wind up at public school hanky panky cheeky bugger Richard do one some dodgy chav bite your arm off. Argy-bargy excuse my French brown bread up the duff bleeder fanny around spend a penny barmy bonnet, bubble and squeak brolly bugger no biggie smashing get stuffed mate old lurgy, cup of tea nice one mufty that I knackered some dodgy chav. Say vagabond morish crikey excuse my French bonnet William blatant spend a penny, knackered bite your arm off what a plonker blimey smashing a blinding shot pardon me grub, wind up cracking goal Jeffrey hanky panky are you taking the piss such a fibber hunky-dory.</p>
                        <p >So I said on your bike mate easy peasy dropped a clanger blow off porkies is fantastic show off show off pick your nose and blow off, faff about bubble and squeak bugger all mate happy days hotpot don't get shirty with me jolly good gormless barmy.</p>

                        <Link to="/contact" className="z-btn mt-10">Appionment</Link>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default TeamDetailsArea;