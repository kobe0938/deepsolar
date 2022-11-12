import React from 'react';
import SingleTeam from '../../../components/SingleTeam/SingleTeam';

const TeamArea = () => {
   return (
      <>
         <section className="team__area pt-115 pb-110">
            <div className="container">
               <div className="row align-items-center mb-55">
                  <div className="col-xl-6 col-lg-8 col-md-8 col-sm-8">
                     <div className="section__title section__title-3 mb-30">
                        <span>Our Team</span>
                        <h2>We developed deep solar.</h2>
                     </div>
                  </div>
               </div>
               <div className="row">

                  <SingleTeam image="1" name="Jiafan Yu" title="PhD Student" />
                  <SingleTeam image="2" name="Zhecheng Wang" title="PhD Student" />
                  <SingleTeam image="3" name="Arun Majumdar" title="Faculty" />
                  <SingleTeam image="4" name="Ram Rajagopal" title="Faculty" />
                  <SingleTeam image="1" name="Jiafan Yu" title="PhD Student" />
                  <SingleTeam image="2" name="Zhecheng Wang" title="PhD Student" />
                  <SingleTeam image="3" name="Arun Majumdar" title="Faculty" />
                  <SingleTeam image="4" name="Ram Rajagopal" title="Faculty" />
                  <SingleTeam image="1" name="Jiafan Yu" title="PhD Student" />
                  <SingleTeam image="2" name="Zhecheng Wang" title="PhD Student" />
                  <SingleTeam image="3" name="Arun Majumdar" title="Faculty" />
                  <SingleTeam image="4" name="Ram Rajagopal" title="Faculty" />
               </div >
            </div >
         </section >
      </>
   );
};

export default TeamArea;