import React from 'react';
import HomeThreeSecondSingleService from '../../../components/HomeThreeSecondSingleService/HomeThreeSecondSingleService';
import { SiKnowledgebase } from 'react-icons/si';
import { BsTools, BsHeart, BsBag } from 'react-icons/bs';
import { FaCheck } from 'react-icons/fa';

const HomeThreeSecondServices = ({tab1Name, tab1Text,tab1Text2,tab1Text3, tab1Image, tab1Image2, tab2Name, tab2Text, tab2Image, tab3Name, tab3Text, tab3Image, tab4Name, tab4Text, tab4Image, tab5Name, tab5Text, tab5Image}) => {
   return (
      <>
         <section className="services__area-3 pt-115 pb-160">
            <div className="container">
               {/* <div className="row">
                  <div className="col-xl-6">
                     <div className="section-title section__title-3 mb-70">
                        <h2>Detailed <br/> Description</h2>
                        <p>DeepSolar Model& DeepSolar Database</p>
                     </div>
                  </div>
               </div> */}
               <div className="row">
                  <div className="col-xl-12">
                     <div className="services__nav wow fadeInUp" data-wow-delay=".4s">
                        <ul className="nav nav-pills " id="services-tab" role="tablist">
                           <li className="nav-item mb-45">
                              <a className="nav-link active" id="share-tab" data-bs-toggle="pill" href="#share" role="tab" aria-controls="share" aria-selected="true">
                                 <i> <SiKnowledgebase/> </i>{tab1Name}
                              </a>
                           </li>
                           <li className="nav-item mb-30">
                              <a className="nav-link" id="customer-tab" data-bs-toggle="pill" href="#customer" role="tab" aria-controls="customer" aria-selected="true">
                                 <i ><BsTools/></i> {tab2Name}
                              </a>
                           </li>
                           <li className="nav-item mb-30">
                              <a className="nav-link" id="social-tab" data-bs-toggle="pill" href="#social" role="tab" aria-controls="social" aria-selected="true">
                                 <i ><BsHeart/></i> {tab3Name}
                              </a>
                           </li>
                           <li className="nav-item mb-30">
                              <a className="nav-link" id="financial-tab" data-bs-toggle="pill" href="#financial" role="tab" aria-controls="financial" aria-selected="true">
                                 <i ><BsBag/></i> {tab4Name}
                              </a>
                           </li>
                           <li className="nav-item mb-30">
                           {
                              tab5Name !== undefined ? 
                              <a className="nav-link" id="share-tab2" data-bs-toggle="pill" href="#share2" role="tab" aria-controls="share2" aria-selected="true">
                                 <i ><BsBag/></i> {tab5Name}
                              </a>
                              : <a/>
                           }
                           </li>
                        </ul>
                     </div>
                  </div>
                  <div className="col-xl-12">
                     <div className="services__tab grey-bg-18">
                        <div className="tab-content" id="services-content">
                           <div className="tab-pane fade show active" id="share" role="tabpanel" aria-labelledby="share-tab">
                              <HomeThreeSecondSingleService title={tab1Name} content={tab1Text} image={tab1Image} content2={tab1Text2} 
                              image2={tab1Image2} content3={tab1Text3}/>
                           </div>
                           <div className="tab-pane fade" id="customer" role="tabpanel" aria-labelledby="customer-tab">
                              <HomeThreeSecondSingleService title={tab2Name} content={tab2Text} image={tab2Image}/>
                           </div>
                           <div className="tab-pane fade" id="social" role="tabpanel" aria-labelledby="social-tab">
                              <HomeThreeSecondSingleService title={tab3Name} content={tab3Text} image={tab3Image}/>
                           </div>
                           <div className="tab-pane fade" id="financial" role="tabpanel" aria-labelledby="financial-tab">
                              <HomeThreeSecondSingleService title={tab4Name} content={tab4Text} image={tab4Image}/>
                           </div>

                           <div className="tab-pane fade" id="share2" role="tabpanel" aria-labelledby="share-tab2">
                                 {/* tab5Name !== undefined ?  */}
                                 <HomeThreeSecondSingleService title={tab5Name} content={tab5Text} image={tab5Image}/>
                                 :
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

export default HomeThreeSecondServices;