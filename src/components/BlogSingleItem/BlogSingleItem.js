import React from 'react';
import {  FaRegComments } from 'react-icons/fa';
import { CgArrowLongRight } from 'react-icons/cg';
import { Link } from 'react-router-dom';

const BlogSingleItem = ({image,user_image,name,title,video_icon}) => {
   return (
      <>
         <div className="blog__item-2 mb-50 fix" >
            <div className={`blog__thumb-2 w-img fix ${video_icon && 'p-relative'}`}>
               <Link to="/blogDetails">
                  <img src={`assets/img/blog/blog-${image}.jpg`} alt="" />
               </Link>
               {video_icon && video_icon}
            </div>
            <div className="blog__content-2">
               <div className="blog__meta-2 mb-15 d-sm-flex align-items-center">
                  <div className="blog__user pr-20 mr-20">
                     <Link to="/blogDetails">
                        <img src={`assets/img/blog/user/user-${user_image}.jpg`} alt="" />
                        <h6>{name}</h6>
                     </Link>
                  </div>
                  <div className="blog__date">
                     <span>23 Jan 2022</span>
                  </div>
               </div>
               <h3>
                  <Link to="/blogDetails">{title}</Link>
               </h3>
               <p>I don't want no agro say chimney pot plastered bamboozled arse Why dropped a clanger
                  cheeky bloke, Eaton crikey morish me old mucker cuppa[...]</p>
               <div className="blog__btn d-sm-flex justify-content-between">
                  <div className="blog__btn">
                     <Link to="/blogDetails" className="link-btn-2">
                        Read More
                        <i > <CgArrowLongRight/> </i>
                        <i > <CgArrowLongRight /> </i>
                     </Link>
                  </div>
                  <div className="blog__comment">
                     <Link to="/blogDetails">
                        <i><FaRegComments/></i>
                        Comments
                     </Link>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default BlogSingleItem;