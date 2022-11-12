import React from 'react';
import { CgArrowLongLeft, CgArrowLongRight } from 'react-icons/cg';
import { Link } from 'react-router-dom';

const PortfolioDetailsArea = () => {
   return (
      <>
         <section className="portfolio__details pt-120 pb-130">
            <div className="container">
               <div className="row">
                  <div className="col-xl-6 col-lg-6 col-md-6">
                     <div className="portfolio__img-wrapper">
                        <div className="portfolio__img mb-30 w-img" >
                           <img src="assets/img/portfolio/details/port-01.jpg" alt=""/>
                        </div>
                        <div className="portfolio__img mb-30 w-img" >
                           <img src="assets/img/portfolio/details/port-02.jpg" alt=""/>
                        </div>
                        <div className="portfolio__img mb-30 w-img" >
                           <img src="assets/img/portfolio/details/port-03.jpg" alt=""/>
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-5 col-lg-6 col-md-6 offset-xl-1">
                     <div className="portfolio__details-content mt-10">
                        <div className="portfolio__meta mb-5" >
                           <h4>Branding Creative:</h4>
                           <span>June 14, 2021</span>
                        </div>
                        <h1 >Branding New <br/> Clock</h1>
                        <div className="portfolio__info mb-25" >
                           <h3>Category:</h3>
                           <p> UX Design, Art Direction, Consulting</p>
                        </div>
                        <div className="portfolio__info mb-25" >
                           <h3>Customer: </h3>
                           <p>Envato Market</p>
                        </div>
                        <div className="portfolio__overview mt-40" >
                           <h2>Project Overview</h2>
                           <p>My lady the full monty pukka a blinding shot owt to do with me that bubble and squeak lurgy faff about, gosh A bit of how's your father tinkety tonk old fruit knees up bobby bugger barmy, bloke the little rotter tickety-boo bevvy me old mucker Charles show off show off pick your nose and blow off. Knackered what a load of rubbish cuppa tinkety tonk old fruit the full monty faff about you mug brown bread, pukka bleeding give us a bell smashing cup of char bugger all mate chimney pot, it's all gone to pot down the pub crikey me old mucker fanny around horse play. Bog crikey have it he legged it victoria sponge mush Harry a load of old tosh, young delinquent bum bag butty faff about tomfoolery pukka, cheeky morish amongst codswallop wind up sloshed.</p>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="portfolio__pagination-wrapper mt-70">
                  <div className="row">
                     <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
                        <div className="portfolio__pagination">
                           <Link to="/portfolioDetails" className="link-btn-2 link-btn-3">
                              Previous
                              <i > <CgArrowLongLeft /> </i>
                              <i > <CgArrowLongLeft /> </i>
                           </Link>
                        </div>
                     </div>
                     <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
                        <div className="portfolio__pagination text-end">
                           <Link to="/portfolioDetails" className="link-btn-2">
                              Next
                              <i > <CgArrowLongRight /> </i>
                              <i > <CgArrowLongRight /> </i>
                           </Link>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default PortfolioDetailsArea;