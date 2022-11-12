import React from 'react';
import CommonPageHeader from '../../components/CommonPageHeader/CommonPageHeader';
import PageHelmet from '../../components/shared/PageHelmet';
import BlogFooter from '../Blogs/BlogFooter/BlogFooter';
import HomeOneHeader from '../Home/HomeOneHeader/HomeOneHeader';
import BlogDetailsArea from './BlogDetailsArea/BlogDetailsArea';

const BlogDetails = () => {
   return (
      <>
         <PageHelmet pageTitle="Blog Details Page" />

         <HomeOneHeader/>
         <CommonPageHeader title="Blog Details" subtitle="Blog Details" />
         <BlogDetailsArea/>
         <BlogFooter/>
      </>
   );
};

export default BlogDetails;