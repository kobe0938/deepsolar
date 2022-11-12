import React from 'react';
import SingleExpartContent from '../../../components/SingleExpartContent/SingleExpartContent';

const HomeTwoExpertArea = () => {
   return (
      <>
         <section className="expart__area pt-200 wow fadeInUp" data-wow-delay=".4s">
            <div className="container">
               <div className="row">
                  <div className="col-xl-12">
                     <div className="expart__wrapper">
                        <div className="expart__nav">
                           <ul className="nav nav-pills justify-content-end" id="expart-tab" role="tablist">
                              <li className="nav-item text-center">
                                 <a className="nav-link active" id="philosophy-tab" data-bs-toggle="pill" href="#philosophy" role="tab" aria-controls="philosophy" aria-selected="true">Description</a>
                              </li>
                              <li className="nav-item text-center">
                                 <a className="nav-link" id="work-tab" data-bs-toggle="pill" href="#work" role="tab" aria-controls="work" aria-selected="false">What's New</a>
                              </li>
                           </ul>
                        </div>
                        <div className="expart__tab">
                           <div className="tab-content" id="expart-Content">
                              <div className="tab-pane fade show active" id="philosophy" role="tabpanel" aria-labelledby="philosophy-tab">
                                 <SingleExpartContent image="1" />
                              </div>
                              <div className="tab-pane fade" id="work" role="tabpanel" aria-labelledby="work-tab">
                                 <SingleExpartContent image="2" />
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default HomeTwoExpertArea;