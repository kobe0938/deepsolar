import React from 'react';
import SinglePrice from '../../../components/SinglePrice/SinglePrice';

const HomePricing = () => {
   return (
      <>
         <section className="price__area pt-115 pb-75">
            <div className="container">
               <div className="row">

                  <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1">
                     <div className="section__title section__title-3 mb-85 text-center">
                        <span>Our Team</span>
                        <h2>Flexible Pricing Packages</h2>
                        <p>join and get 20% off coupon</p>
                     </div>
                     <div className="price__tab d-flex justify-content-center mb-50">
                        <div className="price__offer">
                           <span>Save 20%</span>
                           <img src="assets/img/icon/price/line.png" alt=""/>
                        </div>
                        <ul className="nav nav-tabs justify-content-center" id="price-tab" role="tablist">

                            <li className="nav-item">
                              <button className="nav-link active" id="yearly-tab" data-bs-toggle="tab" data-bs-target="#yearly" role="tab" aria-controls="yearly" aria-selected="true">Yearly</button>
                           </li>

                           <li className="nav-item">
                              <button className="nav-link" id="monthly-tab" data-bs-toggle="tab"
                                 data-bs-target="#monthly" role="tab" aria-controls="monthly"
                                 aria-selected="false">Monthly</button>
                           </li>

                        </ul>
                     </div>
                  </div>
               </div>

               <div className="price__tab-content">
                  <div className="tab-content" id="price-tab-content">
                     <div className="tab-pane fade" id="monthly" role="tabpanel" aria-labelledby="monthly-tab">
                        <div className="row">

                           <SinglePrice title="Free" price="0" />
                           <SinglePrice title="Premium" price="47" active="active" />
                           <SinglePrice title="Enterprise" price="74" />

                        </div>
                     </div>

                     <div className="tab-pane fade show active" id="yearly" role="tabpanel" aria-labelledby="yearly-tab">
                        <div className="row">

                           <SinglePrice title="Enterprise" price="49" />
                           <SinglePrice title="Premium" price="79" active="active" />
                           <SinglePrice title="Professional" price="99" />

                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>

      </>
   );
};

export default HomePricing;