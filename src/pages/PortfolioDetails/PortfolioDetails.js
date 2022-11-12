import React from 'react';
import CommonPageHeader from '../../components/CommonPageHeader/CommonPageHeader';
import Footer from '../../components/shared/Footer';
import PageHelmet from '../../components/shared/PageHelmet';
import HomeOneHeader from '../Home/HomeOneHeader/HomeOneHeader';
import PortfolioDetailsArea from './PortfolioDetailsArea/PortfolioDetailsArea';

const PortfolioDetails = () => {
   return (
      <>
         <PageHelmet pageTitle="Portfolio Details Page" />

         <HomeOneHeader/>
         <CommonPageHeader title="Portfolio Details" subtitle="Portfolio Details" />
         <PortfolioDetailsArea/>
         <Footer/>
      </>
   );
};

export default PortfolioDetails;