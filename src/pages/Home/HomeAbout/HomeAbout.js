import { CgArrowLongRight } from 'react-icons/cg';
import { FaCheck } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const HomeAbout = () => {
   return (
      <>
         <section className="about__area pb-200 pt-100">
            <div className="container">
               <div className="row">
                  <div className="col-xl-6 pr-0 col-lg-6">
                     <div className="about__thumb m-img">
                        <img src="assets/img/about/about-1.jpg" alt=""/>
                           <div className="about__shape">
                              <img src="assets/img/about/red-shape.png" alt=""/>
                           </div>
                     </div>
                  </div>
                  <div className="col-xl-5 offset-xl-1 col-lg-5 offset-lg-1">
                     <div className="about__content">
                        <div className="section__title mb-25">
                           <span>Background</span>
                           <h2>Deep Solar Background</h2>
                        </div>
                        <p>Solar photovoltaics (PV) adoption is rapidly growing worldwide due to its reducing costs and environmental benefits. With deep penetration of solar energy resources, the electric grid in the U.S. is also undergoing a transformation towards a cleaner energy network. However, a complete database containing the accurate locations and size information of PV installations, especially of distributed rooftop/residential solar panels, is still unavailable in the U.S., making power grid monitoring and operation difficult. Moreover, current socioeconomic analyses on solar adoption in the U.S. are based on data from specific regions or limited groups of residents. Considering nationwide heterogeneity, conclusions drawn from such local samples can be misleading for policymakers and solar companies.</p>
                        {/* <div className="about__list">
                           <ul>
                              <li ><span><i > <FaCheck/> </i>Innovative ideas</span></li>
                              <li ><span><i > <FaCheck/> </i>Professional assistance</span></li>
                              <li ><span><i > <FaCheck/> </i>Financial advisory</span></li>
                           </ul>
                        </div> */}
                        <Link to="/interactiveMap" className="z-btn " >What we do<i > <CgArrowLongRight /> </i></Link>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default HomeAbout;