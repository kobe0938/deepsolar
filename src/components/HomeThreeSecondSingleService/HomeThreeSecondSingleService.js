import React from 'react';
import {NavLink, Link } from 'react-router-dom';
import { Markup } from 'interweave';
import { FaCheck } from 'react-icons/fa';

const HomeThreeSecondSingleService = ({title, content, content2,content3, image, image2, severalURLs}) => {
   return (
      <>
      {
         content2 !== undefined ?
         <div className="services__nav-content pt-90 pb-90">
            <div className="col">
               <div className="col-xl-12 col-lg-6">
                  <div className="services__content-3 pl-70 pr-70">
                     <h3>{title}</h3>
                     <p>{<Markup content={content} />}</p>
                  </div>
               </div>
               <div className="col-xl-10 col-lg-6">
                  <div className="services__thumb text-lg-right m-img">
                     <img src={image} alt=""/>
                  </div>
               </div>
               <div className="col-xl-12 col-lg-6">
                  <div className="services__content-3 pl-70 pr-70">
                     <p>{<Markup content={content2} />}</p>
                     {/* <div className="services__icon-wrapper d-md-flex mb-35">
                        <div className="services__icon-item d-flex mr-60 mb-30">
                           <div className="icon mr-20">
                              <img src="assets/img/icon/services/services-9.png" alt="" />
                           </div>
                           <div className="text">
                              <h3>Acquisitions Finance Consulting</h3>
                           </div>
                        </div>
                        <div className="services__icon-item d-flex mb-30">
                           <div className="icon mr-20">
                              <img src="assets/img/icon/services/services-10.png" alt="" />
                           </div>
                           <div className="text">
                              <h3>Private Placement Consulting</h3>
                           </div>
                        </div>
                     </div> */}
                     {/* <Link to="/contact" className="z-btn">Get Started</Link> */}
                  </div>
               </div>
               <div className="col-xl-10 col-lg-6">
                  <div className="services__thumb text-lg-right m-img">
                     <img src={image2} alt="" />
                  </div>
               </div>
               {/* <div className="col-xl-5 col-lg-6">
                  <div className="services__thumb text-lg-right m-img">
                  </div>
               </div> */}
               <div className="col-xl-12 col-lg-6">
                  <div className="services__content-3 pl-70 pr-70">
                     <p>{<Markup content={content3} />}</p>
                     <a href="https://github.com/wangzhecheng/DeepSolar_timelapse" className="z-btn">Link to Model</a>
                  </div>
               </div>
            </div>
            
         </div> : <div className="services__nav-content pt-90 pb-90">
            <div className="row">
               <div className="col-xl-5 col-lg-6">
                  <div className="services__thumb text-lg-right m-img">
                     <img src={image} alt="" />
                  </div>
               </div>

            {
               (content === "news coverage") ?
               <div className="col-xl-12 col-lg-6">
                  <div className="services__content-3 pl-70 pr-70">
                     <h3>{title}</h3>
                     <p>
                        <div className='about__list'><ul>
                           <NavLink to = "//news.stanford.edu/2018/12/19/inventory-indicates-goes-solar/"><li><span><i > <FaCheck/> </i>Stanford News: Stanford scientists locate nearly all U.S. solar panels by applying machine learning to a billion satellite images.</span></li></NavLink>
                           <NavLink to = "//www.technologyreview.com/2018/12/20/103625/how-deep-learning-helped-to-map-every-solar-panel-in-the-us/"><li ><span><i > <FaCheck/> </i>MIT Technology Review: How deep learning helped to map every solar panel in the US.</span></li></NavLink>
                           <NavLink to = "//www.pbs.org/newshour/science/how-artificial-intelligence-spotted-every-solar-panel-in-the-u-s"><li><span><i > <FaCheck/> </i>PBS NewsHour: How artificial intelligence spotted every solar panel in the U.S.</span></li></NavLink>
                           <NavLink to = "//www.fastcompany.com/90284523/there-are-way-more-solar-panels-in-the-u-s-than-we-thought"><li ><span><i > <FaCheck/> </i>Fast Company: There are way more solar panels in the U.S. than we thought.</span></li></NavLink>
                           <NavLink to = "//gizmodo.com/this-ai-just-mapped-every-solar-panel-in-the-united-sta-1831200756"><li ><span><i > <FaCheck/> </i>Gizmodo: This AI Just Mapped Every Solar Panel in the United States.</span></li></NavLink>
                           <NavLink to = "//techcrunch.com/2018/12/19/this-project-is-mapping-every-solar-panel-in-the-country-using-machine-learning/"><li ><span><i > <FaCheck/> </i>TechCrunch: This project is mapping every solar panel in the country using machine learning.</span></li></NavLink>
                           <NavLink to = "//spectrum.ieee.org/forget-cats-this-neural-network-spots-solar-panels"><li ><span><i > <FaCheck/> </i>IEEE Spectrum: Forget Cats, This Neural Network Spots Solar Panels.</span></li></NavLink>
                           <NavLink to = "//www.cnet.com/science/researchers-turn-to-ai-help-map-every-solar-panel-in-the-us/"><li ><span><i > <FaCheck/> </i>CNet: Researchers turn to AI for help in mapping every solar panel in the US.</span></li></NavLink>
                           <NavLink to = "//www.earth.com/news/algorithm-locate-solar-panel/"><li ><span><i > <FaCheck/> </i>Earth.com: Machine learning algorithm can locate every solar panel in the US.</span></li></NavLink>
                           <NavLink to = "//cleantechnica.com/2018/12/19/stanford-maps-1-47-million-solar-roofs-in-america/"><li ><span><i > <FaCheck/> </i>Cleantechnica: Stanford Maps 1.47 Million Solar Roofs in America.</span></li></NavLink>
                           <NavLink to = "//www.popularmechanics.com/technology/infrastructure/a25632536/solar-power-panels-ai-standford/"><li ><span><i > <FaCheck/> </i>Popular Mechanics: New Map Powered by A.I. Reveals Almost Every Solar Panel in America.</span></li></NavLink>
                           <NavLink to = "//www.engadget.com/2018-12-19-stanford-deepsolar-ai.html"><li ><span><i > <FaCheck/> </i>Engadget: Stanford AI found nearly every solar panel in the US.</span></li></NavLink>
                           <NavLink to = "//www.eurekalert.org/news-releases/573280"><li ><span><i > <FaCheck/> </i>EurekAlert: How to spot every solar panel in the United States.</span></li></NavLink>
                           <NavLink to = "//www.lavanguardia.com/vida/20181219/453650905847/innovador-estudio-detecta-casi-15-millones-de-paneles-solares-en-eeuu.html"><li ><span><i > <FaCheck/> </i>La Vanguardia (Barcelona daily): Innovador estudio detecta casi 1,5 millones de paneles solares en EEUU.</span></li></NavLink>
                           <NavLink to = "//news.rambler.ru/scitech/41459825-iskusstvennyy-intellekt-sostavil-novuyu-kartu-ssha/"><li ><span><i > <FaCheck/> </i>Rambler.ru: Искусственный интеллект составил новую карту США.</span></li></NavLink></ul>
                        </div> 
                     </p>
                  </div>
               </div> : 


               <div className="col-xl-7 col-lg-6">
                  <div className="services__content-3 pl-70 pr-70">
                     <h3>{title}</h3>
                     <p>
                        {
                     (content === "serveralURLs") ?
                        <div>
                           <div className='about__list'><ul><NavLink to = "//www.cell.com/joule/fulltext/S2542-4351(22)00477-9"><li ><span><i > <FaCheck/> </i>Paper</span></li></NavLink><NavLink to = "//github.com/wangzhecheng/DeepSolar_timelapse"><li ><span><i > <FaCheck/> </i>Code repository (containing data downloading instruction)</span></li></NavLink></ul></div> 
                        </div> :
                     (content === "serveralURLsForDeepSolar") ?
                        <div>
                           <div className='about__list'><ul>
                           <NavLink to = "//cell.com/joule/fulltext/S2542-4351(18)30570-1"><li><span><i > <FaCheck/> </i>Paper</span></li></NavLink>
                           <NavLink to = "//github.com/wangzhecheng/DeepSolar"><li ><span><i > <FaCheck/> </i>Code repository (Tensorflow legacy)</span></li></NavLink>
                           <NavLink to = "//github.com/wangzhecheng/deepsolar_pytorch"><li><span><i > <FaCheck/> </i>Code repository (PyTorch)</span></li></NavLink>
                           <NavLink to = "//web.stanford.edu/group/deepsolar/deepsolar_tract.csv"><li ><span><i > <FaCheck/> </i>DeepSolar database (census tract level)</span></li></NavLink>
                           <NavLink to = "//web.stanford.edu/group/deepsolar/deepsolar_tract_meta.csv"><li ><span><i > <FaCheck/> </i>DeepSolar database (metadata)</span></li></NavLink></ul>
                           </div> 
                        </div>
                        :
                     // (content === "news coverage") ?
                     //    <div>
                     //          <div className='about__list'><ul>
                     //          <NavLink to = "//news.stanford.edu/2018/12/19/inventory-indicates-goes-solar/"><li><span><i > <FaCheck/> </i>Stanford News: Stanford scientists locate nearly all U.S. solar panels by applying machine learning to a billion satellite images.</span></li></NavLink>
                     //          <NavLink to = "//www.technologyreview.com/2018/12/20/103625/how-deep-learning-helped-to-map-every-solar-panel-in-the-us/"><li ><span><i > <FaCheck/> </i>MIT Technology Review: How deep learning helped to map every solar panel in the US.</span></li></NavLink>
                     //          <NavLink to = "//www.pbs.org/newshour/science/how-artificial-intelligence-spotted-every-solar-panel-in-the-u-s"><li><span><i > <FaCheck/> </i>PBS NewsHour: How artificial intelligence spotted every solar panel in the U.S.</span></li></NavLink>
                     //          <NavLink to = "//www.fastcompany.com/90284523/there-are-way-more-solar-panels-in-the-u-s-than-we-thought"><li ><span><i > <FaCheck/> </i>Fast Company: There are way more solar panels in the U.S. than we thought.</span></li></NavLink>
                     //          <NavLink to = "//gizmodo.com/this-ai-just-mapped-every-solar-panel-in-the-united-sta-1831200756"><li ><span><i > <FaCheck/> </i>Gizmodo: This AI Just Mapped Every Solar Panel in the United States.</span></li></NavLink>
                     //          <NavLink to = "//techcrunch.com/2018/12/19/this-project-is-mapping-every-solar-panel-in-the-country-using-machine-learning/"><li ><span><i > <FaCheck/> </i>TechCrunch: This project is mapping every solar panel in the country using machine learning.</span></li></NavLink>
                     //          <NavLink to = "//spectrum.ieee.org/forget-cats-this-neural-network-spots-solar-panels"><li ><span><i > <FaCheck/> </i>IEEE Spectrum: Forget Cats, This Neural Network Spots Solar Panels.</span></li></NavLink>
                     //          <NavLink to = "//www.cnet.com/science/researchers-turn-to-ai-help-map-every-solar-panel-in-the-us/"><li ><span><i > <FaCheck/> </i>CNet: Researchers turn to AI for help in mapping every solar panel in the US.</span></li></NavLink>
                     //          <NavLink to = "//www.earth.com/news/algorithm-locate-solar-panel/"><li ><span><i > <FaCheck/> </i>Earth.com: Machine learning algorithm can locate every solar panel in the US.</span></li></NavLink>
                     //          <NavLink to = "//cleantechnica.com/2018/12/19/stanford-maps-1-47-million-solar-roofs-in-america/"><li ><span><i > <FaCheck/> </i>Cleantechnica: Stanford Maps 1.47 Million Solar Roofs in America.</span></li></NavLink>
                     //          <NavLink to = "//www.popularmechanics.com/technology/infrastructure/a25632536/solar-power-panels-ai-standford/"><li ><span><i > <FaCheck/> </i>Popular Mechanics: New Map Powered by A.I. Reveals Almost Every Solar Panel in America.</span></li></NavLink>
                     //          <NavLink to = "//www.engadget.com/2018-12-19-stanford-deepsolar-ai.html"><li ><span><i > <FaCheck/> </i>Engadget: Stanford AI found nearly every solar panel in the US.</span></li></NavLink>
                     //          <NavLink to = "//www.eurekalert.org/news-releases/573280"><li ><span><i > <FaCheck/> </i>EurekAlert: How to spot every solar panel in the United States.</span></li></NavLink>
                     //          <NavLink to = "//www.lavanguardia.com/vida/20181219/453650905847/innovador-estudio-detecta-casi-15-millones-de-paneles-solares-en-eeuu.html"><li ><span><i > <FaCheck/> </i>La Vanguardia (Barcelona daily): Innovador estudio detecta casi 1,5 millones de paneles solares en EEUU.</span></li></NavLink>
                     //          <NavLink to = "//news.rambler.ru/scitech/41459825-iskusstvennyy-intellekt-sostavil-novuyu-kartu-ssha/"><li ><span><i > <FaCheck/> </i>Rambler.ru: Искусственный интеллект составил новую карту США.</span></li></NavLink></ul>
                     //          </div> 
                     //    </div>
                     //       :
                      <Markup content={content} />
                     }
                     </p>
                     {/* <div className="services__icon-wrapper d-md-flex mb-35">
                        <div className="services__icon-item d-flex mr-60 mb-30">
                           <div className="icon mr-20">
                              <img src="assets/img/icon/services/services-9.png" alt="" />
                           </div>
                           <div className="text">
                              <h3>Acquisitions Finance Consulting</h3>
                           </div>
                        </div>
                        <div className="services__icon-item d-flex mb-30">
                           <div className="icon mr-20">
                              <img src="assets/img/icon/services/services-10.png" alt="" />
                           </div>
                           <div className="text">
                              <h3>Private Placement Consulting</h3>
                           </div>
                        </div>
                     </div> */}
                     <Link to="/contact" className="z-btn">Learn More</Link>
                  </div>
               </div>
            }
            </div>
         </div>
      }
      </>
   );
};

export default HomeThreeSecondSingleService;