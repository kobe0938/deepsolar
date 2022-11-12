import React from 'react';
import HomeThreeSecondSingleService from '../../../components/HomeThreeSecondSingleService/HomeThreeSecondSingleService';
import { SiKnowledgebase } from 'react-icons/si';
import { BsTools, BsHeart, BsBag } from 'react-icons/bs';

const HomeThreeSecondServices = () => {
   return (
      <>
         <section className="services__area-3 pt-115 pb-160">
            <div className="container">
               <div className="row">
                  <div className="col-xl-6">
                     <div className="section-title section__title-3 mb-70">
                        <h2>Detailed <br/> Description</h2>
                        <p>DeepSolar Model& DeepSolar Database</p>
                     </div>
                  </div>
               </div>
               <div className="row">
                  <div className="col-xl-12">
                     <div className="services__nav wow fadeInUp" data-wow-delay=".4s">
                        <ul className="nav nav-pills " id="services-tab" role="tablist">
                           <li className="nav-item mb-45">
                              <a className="nav-link active" id="share-tab" data-bs-toggle="pill" href="#share" role="tab" aria-controls="share" aria-selected="true">
                                 <i> <SiKnowledgebase/> </i>DeepSolar Model
                              </a>
                           </li>
                           <li className="nav-item mb-30">
                              <a className="nav-link" id="customer-tab" data-bs-toggle="pill" href="#customer" role="tab" aria-controls="customer" aria-selected="true">
                                 <i ><BsTools/></i> DeepSolar Database
                              </a>
                           </li>
                           <li className="nav-item mb-30">
                              <a className="nav-link" id="social-tab" data-bs-toggle="pill" href="#social" role="tab" aria-controls="social" aria-selected="true">
                                 <i ><BsHeart/></i> DeepSolar Database
                              </a>
                           </li>
                           <li className="nav-item mb-30">
                              <a className="nav-link" id="financial-tab" data-bs-toggle="pill" href="#financial" role="tab" aria-controls="financial" aria-selected="true">
                                 <i ><BsBag/></i> DeepSolar Database
                              </a>
                           </li>
                        </ul>
                     </div>
                  </div>
                  <div className="col-xl-12">
                     <div className="services__tab grey-bg-18">
                        <div className="tab-content" id="services-content">
                           <div className="tab-pane fade show active" id="share" role="tabpanel" aria-labelledby="share-tab">
                              <HomeThreeSecondSingleService title="DeepSolar Model" content="DeepSolar model incorporates both image classification and semantic segmentation in a single Convolutional Neural Network. Classification is to localize the solar panels and segmentation is to estimate their sizes. The classification branch is developed based on Google Inception V3, which is pretrained on ImageNet and then fine-tuned on our dataset containing 360K images. The output of the classifcation branch is a class indicating either positive (containing solar panel) or negative (not containing solar panel). The precision and recall of classification are both around 90% for residential and non-residential areas."/>
                           </div>
                           <div className="tab-pane fade" id="customer" role="tabpanel" aria-labelledby="customer-tab">
                              <HomeThreeSecondSingleService title="DeepSolar Database" />
                           </div>
                           <div className="tab-pane fade" id="social" role="tabpanel" aria-labelledby="social-tab">
                              <HomeThreeSecondSingleService title="DeepSolar Database" />
                           </div>
                           <div className="tab-pane fade" id="financial" role="tabpanel" aria-labelledby="financial-tab">
                              <HomeThreeSecondSingleService title="DeepSolar Database" />
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