import React from 'react';
import CommonCtaArea from '../../components/CommonCtaArea/CommonCtaArea';
import CommonPageHeader from '../../components/CommonPageHeader/CommonPageHeader';
import Footer from '../../components/shared/Footer';
import PageHelmet from '../../components/shared/PageHelmet';
import HomeCapabilities from '../Home/HomeCapabilities/HomeCapabilities';
import HomeOneHeader from '../Home/HomeOneHeader/HomeOneHeader';
import HomeServices from '../Home/HomeServices/HomeServices';
import HomeThreeSecondServices from '../HomeThree/HomeThreeSecondServices/HomeThreeSecondServices';

const Services = () => {
   return (
      <>
         <PageHelmet pageTitle="Services Page" />

         <HomeOneHeader/>
         <CommonPageHeader title="Services" subtitle="Services" />
         <HomeServices />
         <HomeCapabilities/>
         <HomeThreeSecondServices />
         <CommonCtaArea/>
         <Footer/>
      </>
   );
};

export default Services;