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

                <HomeTwoSingleSlide slider_class="col-xl-7 offset-xl-6 col-lg-8 offset-lg-4 col-md-9 offset-md-3 col-sm-10 offset-sm-2" content_class="" attr_2={<h1 >DeepSolar <br /></h1>} btn_text="See what's New" backgroundImage="url(assets/img/slider/02/slider-1.gif)"/>

                <HomeTwoSingleSlide slider_class="col-xl-8 offset-xl-2 col-lg-8 offset-lg-2 col-md-9 offset-md-3 col-sm-10 offset-sm-2" content_class="slider__content-3 text-center" attr_2={<h1 >DeepSolar</h1>} btn_text="See what's New" backgroundImage="url(assets/img/slider/02/slider-2.png)"/>

                {/* <HomeTwoSingleSlide slider_class="col-xl-6" content_class="slider__content-4" attr_1={<span >Stanford</span>} attr_2={<h1 >DeepSolar</h1>} attr_3="A nationwide spatiotemporal solar installation dataset constructed by machine learning." btn_text="See what's New" /> */}

             </Slider>

          </section>
        </>
    );
};

export default HomeTwoHeroSlider;