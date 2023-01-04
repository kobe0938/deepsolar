import React from 'react';
import CommonCtaArea from '../../components/CommonCtaArea/CommonCtaArea';
import PageHelmet from '../../components/shared/PageHelmet';
import TeamArea from '../Team/TeamArea/TeamArea';
import HomeTwoAchievement from './HomeTwoAchievement/HomeTwoAchievement';
import HomeTwoAcknowledgement from './HomeTwoAcknowledgement/HomeTwoAcknowledgement';
import HomeTwoBlogs from './HomeTwoBlogs/HomeTwoBlogs';
import HomeTwoCaseArea from './HomeTwoCaseArea/HomeTwoCaseArea';
import HomeTwoCounter from './HomeTwoCounter/HomeTwoCounter';
import HomeTwoExpertArea from './HomeTwoExpertArea/HomeTwoExpertArea';
import HomeTwoFaq from './HomeTwoFaq/HomeTwoFaq';
import HomeTwoFeatures from './HomeTwoFeatures/HomeTwoFeatures';
import HomeTwoFooter from './HomeTwoFooter/HomeTwoFooter';
import HomeTwoHeader from './HomeTwoHeader/HomeTwoHeader';
import HomeTwoHeroSlider from './HomeTwoHeroSlider/HomeTwoHeroSlider';
import HomeTwoTestimonial from './HomeTwoTestimonial/HomeTwoTestimonial';

const HomeTwo = () => {
   return (
      <>
         <PageHelmet pageTitle="Home Two" />
         <HomeTwoHeader/>
         <HomeTwoHeroSlider/>
         <HomeTwoExpertArea/>
         <p id="latestNews">
            <HomeTwoBlogs/>
         </p>
         <p id="workPresentation">
            <HomeTwoCaseArea/>
         </p>
         <HomeTwoAcknowledgement/>
         {/* <HomeTwoFeatures/> */}
         {/* <HomeTwoFaq/> */}
         {/* <HomeTwoAchievement/> */}
         {/* <HomeTwoCounter/> */}
         <HomeTwoTestimonial/>
         <CommonCtaArea/>
         <HomeTwoFooter/>
      </>
   );
};

export default HomeTwo;