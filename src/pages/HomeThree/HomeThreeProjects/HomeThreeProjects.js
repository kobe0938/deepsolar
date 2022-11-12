import React from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";

const HomeThreeProjects = () => {
   // slick setting
   const settings = {
      autoplay: false,
      autoplaySpeed: 10000,
      dots: false,
      fade: false,
      arrows: false,
      slidesToShow: 2,
      slidesToScroll: 1,
      responsive: [
         {
            breakpoint: 767,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
               initialSlide: 2
            }
         },
      ]
   }
   const testimonialData = [
      {
         id: 1,
         title: <h3><Link to="/portfolioDetails">Organizational <br /> design for business</Link></h3>,
         img:"assets/img/project/project-1.png",
      },
      {
         id: 2,
         title: <h3><Link to="/portfolioDetails">Solve customer <br/> problems in a flash</Link></h3>,
         img:"assets/img/project/project-2.png",
      },
      {
         id: 3,
         title: <h3><Link to="/portfolioDetails">Organizational <br /> design for business</Link></h3>,
         img: "assets/img/project/project-1.png",
      },
   ]
   return (
      <>
         <section className="project__area pt-115 pb-120">
            <div className="container">
               <div className="row">
                  <div className="col-xl-7">
                     <div className="section-title section__title-3 mb-70">
                        <h2>Future is brighter <br/> when you're more prepared</h2>
                        <p>We help you weather today's uncertainty through our best team <br/> intelligence and needs.</p>
                     </div>
                  </div>
               </div>
               <div className="row">
                  <div className="col-xl-12">

                     <Slider className='project__slider' {...settings}>

                        {
                           testimonialData.map((testimonial, index) => {
                              return <div key={index} className="project__item grey-bg-19">
                                 <div className="project__content">
                                    <div className="project__no">
                                       <h5>{testimonial.id}</h5>
                                    </div>
                                    {testimonial.title}
                                 </div>
                                 <div className="project__thumb m-img">
                                    <img src={testimonial.img} alt="" />
                                 </div>
                              </div>
                           })
                        }

                     </Slider>

                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default HomeThreeProjects;