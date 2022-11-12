import React from 'react';
import HomeSingleFeature from '../../../components/HomeSingleFeature/HomeSingleFeature';
import { FiBook, FiLock} from 'react-icons/fi';
import { FaLightbulb, FaRibbon } from 'react-icons/fa';
import { BsHouseDoor } from 'react-icons/bs';
import { IoDocumentTextOutline } from 'react-icons/io5';

const HomeFeatures = () => {
   return (
      <>
         <section className="features__area pb-100 mt--100 wow fadeInUp" data-wow-delay=".5s">
            <div className="container">
               <div className="features__inner fix">
                  <div className="row g-0 ">

                     <HomeSingleFeature icon={<FiBook />} title="Ifrs and Management Reporting" />
                     <HomeSingleFeature icon={<FaLightbulb />} title="See term life insurance rates" />
                     <HomeSingleFeature icon={<BsHouseDoor />} title="Get health insurance quotes" />
                     <HomeSingleFeature icon={<IoDocumentTextOutline />} title="Boat and Yacht Insurance" />
                     <HomeSingleFeature icon={<FiLock />} title="Umbrella Insurance" />
                     <HomeSingleFeature icon={<FaRibbon />} title="How we think and work" />

                  </div>
               </div>
            </div>
         </section>

      </>
   );
};

export default HomeFeatures;