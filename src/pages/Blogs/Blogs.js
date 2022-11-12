import React from 'react';
import CommonPageHeader from '../../components/CommonPageHeader/CommonPageHeader';
import PageHelmet from '../../components/shared/PageHelmet';
import HomeOneHeader from '../Home/HomeOneHeader/HomeOneHeader';
import BlogFooter from './BlogFooter/BlogFooter';
import BlogsArea from './BlogsArea/BlogsArea';

const Blogs = () => {
   return (
      <>
         <PageHelmet pageTitle="Blog Page" />

         <HomeOneHeader/>
         <CommonPageHeader title="Our Blog" subtitle="Blog" />
         <BlogsArea/>
         <BlogFooter/>
      </>
   );
};

export default Blogs;