import React from 'react';
import Slider from "react-slick";

const HomeTwoTestimonial = () => {
   // slick setting
   const settings = {
      // autoplay: true,
      // autoplaySpeed: 100000,
      // dots: true,
      // fade: false,
      // arrows: false,
      autoplay: true,
      autoplaySpeed: 80000,
      speed: 500,
      infinite: true,
      dots: true,
      fade: false,
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1,
   }
   const testimonialData = [
      {
         id:1,
         name:'Charlotte Jee',
         title:'MIT Technology Review',
         word: 'The maps could help us better understand the take-up of solar in the US. Looking ahead, the researchers plan to use their system to create solar maps for other countries, and perhaps deploy it to locate wind turbines and other energy infrastructure.',
      },
      {
         id:2,
         name:'Vicky Stein',
         title:'PBS News Hour',
         word: 'Utility managers could use the information to plan for their own power production in the short term (less on sunny days, more when heavy clouds block the sky). In Germany, energy overloads due to the rapid adoption of renewables have spawned power surges and occasional increases in carbon emissions from fossil-fuel plants. Utilities can also use DeepSolar to determine whether new and expensive power plants might become obsolete before they’re built.',
      },
   ]

   return (
      <>
         <section className="testimoinal__area gradient-bg">
            <div className="container">
               <div className="row">
                  <div className="col-xl-5 col-lg-6">
                     <div className="testimonial__content pt-165 pb-175">
                        <div className="section__title section__title-3 mb-30">
                           {/* <span className="white-color">Media Coverage</span> */}
                           <h2 className="white-color">Featured Media Coverage</h2>
                        </div>

                        <Slider className='testimonial__slider pb-70' {...settings}>

                           {
                              testimonialData.map((testimonial,index) => {
                                 return <div key={index} className="testimonial__item">
                                    <p className="white-color">{testimonial.word}</p>
                                    <div className="testimonial__content d-flex align-items-center">
                                       <div className="quote mr-20">
                                          <img src="assets/img/icon/testimonial/quote.png" alt="quote" />
                                       </div>
                                       <div className="testimonial__info">
                                          <h4 className="white-color">{testimonial.name}</h4>
                                          <span className="white-color">{testimonial.title}</span>
                                       </div>
                                    </div>

                                 </div>
                              })
                           }

                        </Slider>

                     </div>
                  </div>
                  <div className="col-xl-7 col-lg-6">
                     <div className="testimonial__thumb m-img text-end pt-120 " >
                        <img src="assets/img/testimonial/testimonial-1.png" alt="testimonbial" />
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default HomeTwoTestimonial;