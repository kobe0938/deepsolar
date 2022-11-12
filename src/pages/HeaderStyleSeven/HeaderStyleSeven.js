import React from 'react';
import CommonCtaArea from '../../components/CommonCtaArea/CommonCtaArea';
import PageHelmet from '../../components/shared/PageHelmet';
import HomeThreeFaq from '../HomeThree/HomeThreeFaq/HomeThreeFaq';
import HomeThreeFooter from '../HomeThree/HomeThreeFooter/HomeThreeFooter';
import HomeThreeHeroSection from '../HomeThree/HomeThreeHeroSection/HomeThreeHeroSection';
import HomeThreeProjects from '../HomeThree/HomeThreeProjects/HomeThreeProjects';
import HomeThreeSecondServices from '../HomeThree/HomeThreeSecondServices/HomeThreeSecondServices';
import HomeThreeServices from '../HomeThree/HomeThreeServices/HomeThreeServices';
import HomeTwoTestimonial from '../HomeTwo/HomeTwoTestimonial/HomeTwoTestimonial';
import StyleHeaderSeven from './StyleHeaderSeven/StyleHeaderSeven';

const HeaderStyleSeven = () => {
   return (
      <>
         <PageHelmet pageTitle="Header Style Seven" />

         <StyleHeaderSeven/>
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

export default HeaderStyleSeven;