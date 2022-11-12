import React from 'react';

const ServicesDetailsHeader = () => {
   return (
      <>
         <section className="page__title page__title-2 p-relative d-flex align-items-center fix" style={{ background: `url(assets/img/page-title/page-title-1.jpg)`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
            <div className="slider__shape">
               <img className="shape triangle" src="assets/img/icon/slider/triangle.png" alt="triangle" />
               <img className="shape dotted-square" src="assets/img/icon/slider/dotted-square.png" alt="dotted-square" />
               <img className="shape solid-square" src="assets/img/icon/slider/solid-square.png" alt="solid-square" />
               <img className="shape circle-2" src="assets/img/icon/slider/circle.png" alt="circle" />
            </div>
            <div className="container p-relative">
               <div className="row">
                  <div className="col-xl-7">
                     <div className="page__title-content mt-100">
                        <span>UX Design</span>
                        <h3>Team Management Brand strategy.</h3>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default ServicesDetailsHeader;