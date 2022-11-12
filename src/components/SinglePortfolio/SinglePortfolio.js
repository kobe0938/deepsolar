import React, { useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { CgArrowLongRight } from 'react-icons/cg';
import Lightbox from 'react-image-lightbox';
import { Link } from 'react-router-dom';

const SinglePortfolio = ({ portfolio, filterPortfolio, index }) => {
   const { img, title, subtitle } = portfolio;

   const [photoIndex, setPhotoIndex] = useState(index);
   const [open, setOpen] = useState(false);
   const lightboxImages = filterPortfolio.map(img => img.img);
   const images = lightboxImages

   return (
      <>

         {open && (
            <Lightbox

               mainSrc={images[photoIndex]}
               nextSrc={images[(photoIndex + 1) % images.length]}
               prevSrc={images[(photoIndex + images.length - 1) % images.length]}
               onCloseRequest={() => setOpen(false)}
               onMovePrevRequest={() => setPhotoIndex((photoIndex + images.length - 1) % images.length)}
               onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % images.length)}
            />
         )}

         <div className={img === "assets/img/portfolio/port-1.jpg" ? "col-xl-8 col-lg-8 col-md-6 col-sm-6" :
            "col-xl-4 col-lg-4 col-md-6 col-sm-6"}>
            <div className="portfolio__item p-relative mb-30">
               <div className="portfolio__thumb w-img fix">
                  <img src={img} alt="" />
                  <div onClick={setOpen} className="portfolio__plus p-absolute transition-3">
                     <button onClick={() => setPhotoIndex(index)}>
                        <i > <AiOutlinePlus /> </i>
                        <i > <AiOutlinePlus /> </i>
                     </button>
                  </div>
               </div>
               <div className="portfolio__content">
                  <h4><Link to="/portfolioDetails">{title}</Link></h4>
                  <p>{subtitle}</p>
                  <div className="portfolio__more p-absolute transition-3">
                     <Link to="/portfolioDetails" className="link-btn-2">
                        Show Project
                        <i > <CgArrowLongRight /> </i>
                        <i > <CgArrowLongRight /> </i>
                     </Link>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default SinglePortfolio;