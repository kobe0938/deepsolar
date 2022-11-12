import React from 'react';
import CommonCtaArea from '../../components/CommonCtaArea/CommonCtaArea';
import CommonPageHeader from '../../components/CommonPageHeader/CommonPageHeader';
import Footer from '../../components/shared/Footer';
import PageHelmet from '../../components/shared/PageHelmet';
import HomeOneHeader from '../Home/HomeOneHeader/HomeOneHeader';
import TeamDetailsArea from './TeamDetailsArea/TeamDetailsArea';

const TeamDetails = () => {
   return (
      <>
         <PageHelmet pageTitle="Team Details Page" />

         <HomeOneHeader/>
         <CommonPageHeader title="Team Details" subtitle="Team Details" />
         <TeamDetailsArea/>
         <CommonCtaArea/>
         <Footer/>
      </>
   );
};

export default TeamDetails;