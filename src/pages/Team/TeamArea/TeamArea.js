import React from 'react';
import SingleTeam from '../../../components/SingleTeam/SingleTeam';

const TeamArea = ({currentTeamMembers, subtitle2}) => {
   return (
      <>
         <section className="team__area pt-115 pb-110">
            <div className="container">
               <div className="row align-items-center mb-55">
                  <div className="col-xl-6 col-lg-8 col-md-8 col-sm-8">
                     <div className="section__title section__title-3 mb-30">
                        <span>{currentTeamMembers}</span>
                        <h2>{subtitle2}</h2>
                     </div>
                  </div>
               </div>
                  {
                     currentTeamMembers === "Current team members" ? 
                     <div className="row">
                        <SingleTeam image="assets/img/team/Marie-Louise.png" name="Marie-Louise Arlt" title="Postdoctoral Researcher" description = "Postdoctoral Fellow at the Chair for Comparative Economics at Ludwig Maximilian University in Munich; 2018-2020, Visiting Student Researcher at Stanford University;<br>Research interests: Energy markets; market design, mechanism design; optimization including dynamic programming, reinforcement learning, and neural nets" href = "//marielouisearlt.com/" />
                        <SingleTeam image="assets/img/team/Tiffany.jpeg" name="Tiffany Branum" title="Administrator" description = "Administrative Associate in Civil and Environmental Engineering at Stanford University" href = "//profiles.stanford.edu/tiffany-branum" />
                        <SingleTeam image="assets/img/team/Orisa.jpeg" name="Orisa Zarilka Coombs" title="PhD Student" description = "PhD student in Civil and Environmental Engineering at Stanford University; <br>Research interests: water-energy nexus, solar deployment, sanitation for resource constrained areas" href = "//www.linkedin.com/in/orisa-coombs/" />
                        <SingleTeam image="assets/img/team/June.jpeg" name="June Flora" title="Senior Research Scholar" description = "Senior Research Scholar in Civil and Environmental Engineering at Stanford University; <br>Research interests: understanding the drivers of human behavior change and the potential of communication interventions. The research is solution focused on behavior change relevant to health and climate change" href = "/profiles.stanford.edu/june-flora" />
                        <SingleTeam image="assets/img/team/Arun.jpeg" name="Arun Majumdar" title="Faculty" description = "Dean of the Stanford Doerr School of Sustainability. Jay Precourt Provostial Chair Professor at Stanford University; <br>Research interests: redox reactions and systems, multidimensional nanoscale imaging and microscopy, AI for climate/energy solutions" href = "//profiles.stanford.edu/arun-majumdar" />
                        <SingleTeam image="assets/img/team/Rajanie.jpeg" name="Rajanie Prabha" title="PhD Student" description = "PhD student in Civil and Environmental Engineering at Stanford University; <br>Research interests: machine learning, computer vision, sustainability, climate change" href = "//rajanieprabha.github.io" />
                        <SingleTeam image="assets/img/team/Ram.jpeg" name="Ram Rajagopal" title="Faculty" description = "Associate Professor of Civil and Environmental Engineering and of Electrical Engineering at Stanford University; <br>Research interests: large-scale monitoring, data analytics and stochastic control for infrastructure networks, in particular, power networks" href = "//profiles.stanford.edu/ram-rajagopal" />
                        <SingleTeam image="assets/img/team/Chin-Woo.png" name="Chin-Woo Tan" title="Research Scholar" description = "Research Scholar for Stanford Sustainable Systems Lab at Stanford University; <br>Research interests: energy data analytics, demand response and smart grid applications" href = "//www.linkedin.com/in/chin-woo-tan-b184b72b" />
                        <SingleTeam image="assets/img/team/Zhecheng.jpg" name="Zhecheng Wang" title="PhD Student" description = "PhD student in Civil and Environmental Engineering at Stanford University; <br>Research interests: large-scale data acquisition and data analytics for sustainable energy and urban systems" href = "//wangzhecheng.github.io" />
                        <SingleTeam image="assets/img/team/Moritz.jpeg" name="Moritz Wussow" title="PhD Student" description = "PhD student in Information Systems at University of Freiburg, Germany; Visiting PhD student in Civil and Environmental Engineering at Stanford University; <br>Research interests: Machine learning for renewable energy" href = "//www.is.uni-freiburg.de/mitarbeiter-en/team/moritz-wussow" />
                        <SingleTeam image="assets/img/team/Chad.png" name="Chad Zanocco" title="Postdoctoral Researcher" description = "Postdoctoral Researchers in Civil and Environmental Engineering, Stanford; <br>Research interests: interactions between human, climate, and energy systems with a focus on how opinions and attitudes shape, and are shaped by, public policy" href = "//www.frias.uni-freiburg.de/en/people/fellows/current-fellows/zanocco-chad" />
                        {/* <SingleTeam image="assets/img/team/" name="" title="" description = "" href = "" /> */}

                     </div>

                     :
                     <div className="row">
                        <SingleTeam image="assets/img/team/Kevin.jpeg" name="Kevin Mayer" title="PhD student" description = "PhD student in Civil and Environmental Engineering at Stanford University" href = "//kdmayer.github.io/" />
                        <SingleTeam image="assets/img/team/Jiafan.jpeg" name="Jiafan Yu" title="PhD alumni" description = "Now at Waymo LLC; 2019, PhD in Electrical Engineering at Stanford University" href = "//web.stanford.edu/~jfy" />
                     </div>
                  }
            </div >
         </section >
      </>
   );
};

export default TeamArea;