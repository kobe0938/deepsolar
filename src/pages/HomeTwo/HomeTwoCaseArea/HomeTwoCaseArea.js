import React, { useState } from 'react';
import HomeTwoSingleCase from '../../../components/HomeTwoSingleCase/HomeTwoSingleCase';
import featuredWorksData from '../../../data/featuredWorksData';
import HomeAbout from '../../Home/HomeAbout/HomeAbout';
import HomeTeams from '../../Home/HomeTeams/HomeTeams';
import HomeThreeProjects from '../../HomeThree/HomeThreeProjects/HomeThreeProjects';
import HomeThreeSecondServices from '../../HomeThree/HomeThreeSecondServices/HomeThreeSecondServices';
import HomeThreeServices from '../../HomeThree/HomeThreeServices/HomeThreeServices';
import HomeTwoAchievement from '../HomeTwoAchievement/HomeTwoAchievement';
import HomeTwoFaq from '../HomeTwoFaq/HomeTwoFaq';

const allCategories = ['Deep Solar', 'Deep Solar++'];

const arr = featuredWorksData;
const uniqueItem = arr.filter((arr, index, self) =>
   index === self.findIndex((t) => (t.img === arr.img && t.State === arr.State)))


const HomeTwoCaseArea = () => {

   const [isActive, setIsActive] = useState('Deep Solar++');
   const [filterGalleryItems, setFilterGalleryItems] = useState(uniqueItem);

   const filterCategory = (category) => {
      setIsActive(category)
      if (category === 'all') {
        return setFilterGalleryItems(uniqueItem);
      }
      // if (category === coaching')

      // const remainingItems = featuredWorksData.filter(item => item.category === category);
      // setFilterGalleryItems(remainingItems);
   }

   return (
      <>
         <section className="case__area pt-115 pb-120">
            <div className="container">
               <div className="row">
                  <div className="col-xl-8 offset-xl-2">
                     <div className="section__title section__title-3 text-center mb-45">
                        <span>Work presentation</span>
                        <h2>Deep Solar VS Deep Solar++</h2>
                     </div>
                  </div>
               </div>
               <div className="row">
                  <div className="col-xl-12">
                     <div className="case__menu text-center mb-40 wow fadeInUp" data-wow-delay=".6s">
                        <div className="masonary-menu filter-button-group">

                           {
                              allCategories.map((category, index) => {
                                 return <button key={index} onClick={() => filterCategory(category)} className={isActive === category ? 'active text-capitalize' : 'text-capitalize'} >{category}</button>
                              })
                           }

                        </div>
                     </div>
                  </div>
               </div>


               <div className='row'>
                  {
                     isActive === 'Deep Solar++' ? <div>
                        <HomeAbout/>
                        <HomeThreeSecondServices/>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                                                <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <HomeTeams/>
                        place holder for Deep Solar++
                        <p>paper reference and link to the paper</p>
                        <p>background,</p>
                        <p>description, </p> 
                        people’s list
                     </div> 
                     : 
                     <div>
                                             <HomeAbout/>
                     {/* <HomeTwoFaq/>
                     <HomeTwoAchievement/> */}
                        <HomeThreeSecondServices/>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                                                <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <HomeTeams/>
                        place holder for Deep Solar
                        <p>paper reference and link to the paper</p>
                        <p>background,</p>
                        <p>description, </p> 
                        people’s list
                     </div>
                     
                     // <HomeTwoAchievement/> : <HomeTwoFaq/>
                  }
               </div>

            </div>
         </section>
      </>
   );
};

export default HomeTwoCaseArea;