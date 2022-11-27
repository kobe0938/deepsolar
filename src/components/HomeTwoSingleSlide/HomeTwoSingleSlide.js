import React from 'react';

const HomeTwoSingleSlide = ({ slider_class,content_class, attr_1, attr_2, attr_3 = "A nationwide spatiotemporal solar installation dataset constructed by machine learning.",btn_text, backgroundImage}) => {
   return (
      <>
         <div className="single-slider single-slider-2 slider__height slider__height-2 d-flex align-items-center" style={{
            background: backgroundImage, 
            // backgroundRepeat: 'no-repeat',
            // backgroundColor: 'black',
            backgroundPosition: 'center bottom', 
            backgroundSize: "100% 150%"
            }}>

            <div className="container">
               <div className="row">
                  <div className={`${slider_class}`}>
                     <div className={`slider__content slider__content-2 ${content_class && content_class}`}>
                         {attr_1 && attr_1}
                         {attr_2}
                        <p >{attr_3}</p>
                        <div className="slider__btn">
                           <a href="#latestNews" className="z-btn z-btn-transparent">{btn_text}</a>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default HomeTwoSingleSlide;