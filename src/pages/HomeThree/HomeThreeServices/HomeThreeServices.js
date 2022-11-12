import React from 'react';
import { CgArrowLongRight } from 'react-icons/cg';
import { FaCheck } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import HomeThreeSingleService from '../../../components/HomeThreeSingleService/HomeThreeSingleService';

const HomeThreeServices = () => {
   return (
      <>
         <section className="services__area-2 mt--120 pt-270 pb-140 p-relative" style={{ background: `url(assets/img/bg/wave-bg-2.png)`, backgroundPosition: 'bottom', backgroundSize: 'cover' }}>
            <div className="container">
               <div className="row g-0">

                  <HomeThreeSingleService image="1" title="Share Knowledge" subtitle="Data Tracking" />
                  <HomeThreeSingleService image="2" title="Meet New Friends" subtitle="User Experience" />
                  <HomeThreeSingleService image="3" title="Customer Service" subtitle="App Design" />
                  <HomeThreeSingleService image="4" title="Strategic advice" subtitle="Press Releases" />

               </div>
               <div className="about__area-2 pt-130">
                  <div className="row">
                     <div className="col-xl-7 col-lg-6">
                        <div className="about__thumb-2 p-relative m-img">
                           <img src="assets/img/about/about-2.png" alt=""/>
                        </div>
                     </div>
                     <div className="col-xl-5 col-lg-6">
                        <div className="about__content">
                           <div className="section__title section__title-3 mb-25">
                              <h2 >Startup & Early Consulting Business Package</h2>
                           </div>
                           <p >We help you weather today's uncertainty through our best team intelligence and needs.</p>
                           <div className="about__list">
                              <ul>
                                 <li><span><i > <FaCheck/> </i>Innovative ideas</span></li>
                                 <li><span><i > <FaCheck/> </i>Professional assistance</span></li>
                                 <li><span><i > <FaCheck/> </i>Financial advisory</span></li>
                              </ul>
                           </div>
                           <Link to="/about" className="z-btn">What we do<i > <CgArrowLongRight /> </i></Link>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default HomeThreeServices;