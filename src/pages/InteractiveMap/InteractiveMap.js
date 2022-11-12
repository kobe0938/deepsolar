import React from 'react';
import CommonPageHeader from '../../components/CommonPageHeader/CommonPageHeader';
import Footer from '../../components/shared/Footer';
import PageHelmet from '../../components/shared/PageHelmet';
import HomeAbout from '../Home/HomeAbout/HomeAbout';
import HomeBrands from '../Home/HomeBrands/HomeBrands';
import HomeOneHeader from '../Home/HomeOneHeader/HomeOneHeader';
import HomeTwoAchievement from '../HomeTwo/HomeTwoAchievement/HomeTwoAchievement';
import HomeTwoFaq from '../HomeTwo/HomeTwoFaq/HomeTwoFaq';

import TableauCom from '../../components/TableauCom';
import { useEffect, useRef } from 'react';
import HomeTwoHeader from '../HomeTwo/HomeTwoHeader/HomeTwoHeader';
import HomeTwoHeaderSticky from '../HomeTwo/HomeTwoHeader/HomeTwoHeaderSticky';
import HomeTwoFooter from '../HomeTwo/HomeTwoFooter/HomeTwoFooter';
const {tableau} = window;

const InteractiveMap = () => {
   return (
      <div>
         <HomeTwoHeader/>
         <CommonPageHeader title="Interactive Map" subtitle="Map" />
         {/* <section className="contact__help p-relative pt-115 pb-150">
            <div className="contact__shape">
               <img className="dot" src="assets/img/icon/contact/dot.png" alt="" />
               <img className="shape" src="assets/img/icon/contact/shape.png" alt="" />
            </div>
            <div className="container">
               <div className="row">
                  <div className="col-xl-5 offset-xl-1">
                     <div className="section__title section__title-3 mb-55">
                        <span >Contact</span>
                        <h2 >Help Center</h2>
                     </div>
                  </div>
               </div>
            </div>
         </section> */}
         <TableauCom/>
         {/* <PageHelmet pageTitle="About Page" />

         <HomeOneHeader/>
         <CommonPageHeader title="About Us" subtitle="About" />
         <HomeAbout/>
         <HomeTwoFaq/>
         <HomeTwoAchievement/>
         <HomeBrands/>
         <Footer/> */}
         <HomeTwoFooter/>
      </div>
   );
};

export default InteractiveMap;