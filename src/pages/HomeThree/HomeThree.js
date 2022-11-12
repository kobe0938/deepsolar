import React from 'react';
import CommonCtaArea from '../../components/CommonCtaArea/CommonCtaArea';
import PageHelmet from '../../components/shared/PageHelmet';
import HomeTwoTestimonial from '../HomeTwo/HomeTwoTestimonial/HomeTwoTestimonial';
import HomeThreeFaq from './HomeThreeFaq/HomeThreeFaq';
import HomeThreeFooter from './HomeThreeFooter/HomeThreeFooter';
import HomeThreeHeader from './HomeThreeHeader/HomeThreeHeader';
import HomeThreeHeroSection from './HomeThreeHeroSection/HomeThreeHeroSection';
import HomeThreeProjects from './HomeThreeProjects/HomeThreeProjects';
import HomeThreeSecondServices from './HomeThreeSecondServices/HomeThreeSecondServices';
import HomeThreeServices from './HomeThreeServices/HomeThreeServices';

const HomeThree = () => {
   return (
      <>
         <PageHelmet pageTitle="Home Three" />

         <HomeThreeHeader />
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

export default HomeThree;