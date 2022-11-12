import React from 'react';
import SingleService from '../../../components/SingleService/SingleService';

const HomeServices = () => {
   return (
      <>
         <section className="services__area pt-115 pb-80">
            <div className="container">
               <div className="row">
                  <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1">
                     <div className="section__title section__title-3 text-center mb-90 wow fadeInUp" data-wow-delay=".2s">
                        <span>Our Services</span>
                        <h2>Provide awesome customer service with our tools.</h2>
                     </div>
                  </div>
               </div>
               <div className="row">

                  <SingleService icon="1" title="Expense reporting" />
                  <SingleService icon="2" title="Tax Advisory" />
                  <SingleService icon="3" title="Consulting" />
                  <SingleService icon="4" title="Audit & Assurance" />
                  <SingleService icon="5" title="Finance Analytics" />
                  <SingleService icon="6" title="Cord Processing" />
                  <SingleService icon="7" title="Development" />
                  <SingleService icon="8" title="Financial audit" />

               </div>
            </div>
         </section>
      </>
   );
};

export default HomeServices;