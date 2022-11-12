import React from 'react';
import CommonPageHeader from '../../components/CommonPageHeader/CommonPageHeader';
import Footer from '../../components/shared/Footer';
import PageHelmet from '../../components/shared/PageHelmet';
import HomeAbout from '../Home/HomeAbout/HomeAbout';
import HomeBrands from '../Home/HomeBrands/HomeBrands';
import HomeOneHeader from '../Home/HomeOneHeader/HomeOneHeader';
import HomeTwoAchievement from '../HomeTwo/HomeTwoAchievement/HomeTwoAchievement';
import HomeTwoFaq from '../HomeTwo/HomeTwoFaq/HomeTwoFaq';

const About = () => {
   return (
      <>
         <PageHelmet pageTitle="About Page" />

         <HomeOneHeader/>
         <CommonPageHeader title="About Us" subtitle="About" />
         <HomeAbout/>
         <HomeTwoFaq/>
         <HomeTwoAchievement/>
         <HomeBrands/>
         <Footer/>
      </>
   );
};

export default About;