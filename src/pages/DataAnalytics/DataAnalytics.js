import React from 'react';
import CommonPageHeader from '../../components/CommonPageHeader/CommonPageHeader';
import Footer from '../../components/shared/Footer';
import PageHelmet from '../../components/shared/PageHelmet';
import HomeOneHeader from '../Home/HomeOneHeader/HomeOneHeader';
import HomeTwoFooter from '../HomeTwo/HomeTwoFooter/HomeTwoFooter';
import HomeTwoHeader from '../HomeTwo/HomeTwoHeader/HomeTwoHeader';

const DataAnalytics = () => {
   return (
      <>
         <PageHelmet pageTitle="Data Analytics Page" />

         <HomeTwoHeader/>
         <CommonPageHeader title="Data Analytics" subtitle="Data Analytics" />

        <section class="section p-bottom-50">
            <div class="container">
            <iframe  width="100%" height="500" align="middle" src="http://flask-env-5.e2uzixgp7a.us-east-2.elasticbeanstalk.com"></iframe>
            </div>
         </section>
         <HomeTwoFooter/>
      </>
   );
};

export default DataAnalytics;