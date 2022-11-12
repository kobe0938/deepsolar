import React from 'react';
import CommonCtaArea from '../../components/CommonCtaArea/CommonCtaArea';
import PageHelmet from '../../components/shared/PageHelmet';
import HomeThreeFaq from '../HomeThree/HomeThreeFaq/HomeThreeFaq';
import HomeThreeFooter from '../HomeThree/HomeThreeFooter/HomeThreeFooter';
import HomeThreeHeader from '../HomeThree/HomeThreeHeader/HomeThreeHeader';
import HomeThreeHeroSection from '../HomeThree/HomeThreeHeroSection/HomeThreeHeroSection';
import HomeThreeProjects from '../HomeThree/HomeThreeProjects/HomeThreeProjects';
import HomeThreeSecondServices from '../HomeThree/HomeThreeSecondServices/HomeThreeSecondServices';
import HomeThreeServices from '../HomeThree/HomeThreeServices/HomeThreeServices';
import HomeTwoTestimonial from '../HomeTwo/HomeTwoTestimonial/HomeTwoTestimonial';

const HeaderStyleFour = () => {
   return (
      <>
         <PageHelmet pageTitle="Header Style Four" />

         <HomeThreeHeader h4class="header__style-4" btn_text="Sign Up" btn_class="z-btn-border" />
         <HomeThreeHeroSection />
         <HomeThreeServices />
         <HomeThreeSecondServices />
         <HomeTwoTestimonial />
         <HomeThreeProjects />
         <HomeThreeFaq />
         <CommonCtaArea />
         <HomeThreeFooter />
      </>
   );
};

export default HeaderStyleFour;