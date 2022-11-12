import React from 'react';
import HomeTwoSingleSlide from '../../../components/HomeTwoSingleSlide/HomeTwoSingleSlide';
import Slider from "react-slick";

const HomeTwoHeroSlider = () => {
   // slider setting
   const settings = {
      autoplay: true,
      autoplaySpeed: 8000,
      speed: 500,
      infinite: true,
      dots: false,
      fade: true,
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1,
   };

    return (
        <>
          <section className="slider__area slider__area-2">

             <Slider className='slider-active' {...settings}>

                <HomeTwoSingleSlide slider_class="col-xl-7 offset-xl-6 col-lg-8 offset-lg-4 col-md-9 offset-md-3 col-sm-10 offset-sm-2" content_class="" attr_2={<h1 >Deep Solar Project <br /> by Stanford University</h1>} btn_text="See what's New" />

                <HomeTwoSingleSlide slider_class="col-xl-8 offset-xl-2 col-lg-8 offset-lg-2 col-md-9 offset-md-3 col-sm-10 offset-sm-2" content_class="slider__content-3 text-center" attr_2={<h1 >Deep Solar Project</h1>} btn_text="See what's New" />

                <HomeTwoSingleSlide slider_class="col-xl-6" content_class="slider__content-4" attr_1={<span >Deep Solar Project</span>} attr_2={<h1 >Deep Solar Project</h1>} attr_3="a deep learning framework that analyzes satellite imagery to identify the GPS locations and sizes of solar photovoltaic (PV) panels." btn_text="See what's New" />

             </Slider>

          </section>
        </>
    );
};

export default HomeTwoHeroSlider;