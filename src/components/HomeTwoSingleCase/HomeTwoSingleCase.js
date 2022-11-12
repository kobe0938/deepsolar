import React, { useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import Lightbox from 'react-image-lightbox';
import { Link } from 'react-router-dom';


const HomeTwoSingleCase = ({ galleryItem, index, filterGalleryItems}) => {
   const { img,title,subtitle } = galleryItem;
   const [photoIndex, setPhotoIndex] = useState(index);
   const [open, setOpen] = useState(false);
   const lightboxImages = filterGalleryItems.map(img => img.img);
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

         <div className={img === "assets/img/case/case-3.jpg" ? "col-xl-6 col-lg-6 col-md-6" : "col-xl-3 col-lg-3 col-md-6 grid-item"}>
            <div className="case__item mb-30 fix">
               <div className="case__thumb w-img p-relative">
                  <img src={img} alt="case" />
                  <div className="case__info p-absolute transition-3">
                     <h4><Link to="/portfolioDetails">{title}</Link></h4>
                     <span>{subtitle}</span>
                  </div>
                  <div className="case__info case__info-2 p-absolute transition-3">
                     <h4><Link to="/portfolioDetails">{title}</Link></h4>
                     <span>{subtitle}</span>
                  </div>
                  {/* <div className="case__plus p-absolute transition-3" onClick={setOpen} >
                     <button onClick={() => setPhotoIndex(index)} data-fancybox="gallery">
                        <i > <AiOutlinePlus/> </i>
                        <i > <AiOutlinePlus/> </i>
                     </button>
                  </div> */}
               </div>
            </div>
         </div>
      </>
   );
};

export default HomeTwoSingleCase;