import React from 'react';
import SingleCount from '../../../components/SingleCount/SingleCount';

const HomeCounterArea = () => {
   return (
      <>
         <section className="counter__area pb-100">
            <div className="container">
               <div className="counter__inner white-bg wow fadeInUp" data-wow-delay=".2s">
                  <div className="row">

                     <SingleCount counter={1749} title="Happy Clients" />
                     <SingleCount counter={796} title="Project Completed" />
                     <SingleCount counter={573} title="Support Given" />
                     <SingleCount counter={2739} title="Offices Worldwide" />

                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default HomeCounterArea;