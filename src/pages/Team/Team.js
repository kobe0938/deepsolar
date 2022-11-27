import React from 'react';
import CommonCtaArea from '../../components/CommonCtaArea/CommonCtaArea';
import CommonPageHeader from '../../components/CommonPageHeader/CommonPageHeader';
import Footer from '../../components/shared/Footer';
import PageHelmet from '../../components/shared/PageHelmet';
import HomeOneHeader from '../Home/HomeOneHeader/HomeOneHeader';
import HomeTwoFooter from '../HomeTwo/HomeTwoFooter/HomeTwoFooter';
import HomeTwoHeader from '../HomeTwo/HomeTwoHeader/HomeTwoHeader';
import TeamArea from './TeamArea/TeamArea';

const Team = () => {
   return (
      <>
         <PageHelmet pageTitle="Team Page" />

         <HomeTwoHeader/>
         <CommonPageHeader title="Our Team" subtitle="Team" />
         <TeamArea currentTeamMembers = "Current team members" subtitle2 = "We developed DeepSolar++ && DeepSolar."/>
         <TeamArea currentTeamMembers = "Previous team members" subtitle2 = "We developed DeepSolar."/>
         <CommonCtaArea/>
         <HomeTwoFooter/>
      </>
   );
};

export default Team;