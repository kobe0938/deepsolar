import React from 'react';

const HomeTwoFaq = () => {
   return (
      <>
         <section className="faq__area p-relative pt-135 pb-120 grey-bg-12">
            <div className="faq__thumb" style={{ background: `url(assets/img/faq/faq-1.jpg)`, backgroundPosition: 'center', backgroundSize: 'cover' }}></div>
            <div className="container">
               <div className="row">
                  <div className="col-xl-5 offset-xl-7 col-lg-6 offset-lg-6 col-md-7 offset-md-5">
                     <div className="faq__wrapper">
                        <div className="section__title section__title-3 mb-25 wow fadeInUp" data-wow-delay=".2s">
                           <span>Thinking</span>
                           <h2>Knowledge is <br/> the best investment</h2>
                        </div>

                        <div className="accordion" id="accordionExample">

                           <div className="card accordion-item">
                              <div className="accordion-header" id="headingOne">
                                 <h5 className="mb-0">
                                    <button className="btn btn-link" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                       No rocket science included
                                    </button>
                                 </h5>
                              </div>

                              <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                 <div className="card-body accordion-body">
                                    Nancy boy it's all gone to pot grub absolutely bladdered some dodgy chav owt to do with me vagabond only.!
                                 </div>
                              </div>
                           </div>

                           <div className="card accordion-item">
                              <div className="accordion-header" id="headingTwo">
                                 <h5 className="mb-0">
                                    <button className="btn btn-link collapsed" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                       Blazing Site Performance
                                    </button>
                                 </h5>
                              </div>
                              <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                 <div className="card-body accordion-body">
                                    Nancy boy it's all gone to pot grub absolutely bladdered some dodgy chav owt to do with me vagabond only.!
                                 </div>
                              </div>
                           </div>

                           <div className="card accordion-item">
                              <div className="accordion-header" id="headingThree">
                                 <h5 className="mb-0">
                                    <button className="btn btn-link collapsed" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                       Bonus Plugins Included
                                    </button>
                                 </h5>
                              </div>
                              <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                 <div className="card-body accordion-body">
                                    Nancy boy it's all gone to pot grub absolutely bladdered some dodgy chav owt to do with me vagabond only.!
                                 </div>
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

export default HomeTwoFaq;