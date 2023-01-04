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
import { FaCheck } from 'react-icons/fa';

const allCategories = ['DeepSolar++', 'DeepSolar'];

const arr = featuredWorksData;
const uniqueItem = arr.filter((arr, index, self) =>
   index === self.findIndex((t) => (t.img === arr.img && t.State === arr.State)))


const HomeTwoCaseArea = () => {

   const [isActive, setIsActive] = useState('DeepSolar++');
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
                        {/* should be used later: <span>Work presentation</span> */}
                        <h2>Sub-Projects</h2>
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
                     isActive === 'DeepSolar++' ? 
                     <div>
                        <HomeAbout href = "https://www.cell.com/joule/fulltext/S2542-4351(22)00477-9" linkName = "Link to paper" image = "assets/img/about/graphical_abstract.png" text = "Although the United States has generally experienced a rapid adoption of residential photovoltaics (PV), many communities are lagging behind. To investigate why, we developed a computer vision model that addresses the challenge of low image resolution to identify the installation year of PVs from historical aerial and satellite images. We used the model to construct a granular spatiotemporal dataset of PV deployment across 46 US states and analyzed these data from a technology adoption life cycle perspective. Our analysis of adoption curves and phases showed that low-income communities are not only delayed in their adoption onset but also saturate more quickly at lower levels. We further demonstrated the value of our data via an illustrative analysis of financial incentives and found that performance-based incentives are positively associated with saturated adoption levels—particularly for lower-income communities. Our study highlights the importance of analyzing PV adoption trajectories from dynamic perspectives to inform policy design."/>
                        <HomeThreeSecondServices tab1Name={"DeepSolar++ Model"} tab1Text="The DeepSolar++ model takes a sequence of images captured in different years at the geolocation of a PV system as inputs to predict its installation year. Each historical image is classified as either positive (contains solar) or negative (otherwise) by Convolutional Neural Network (CNN) models. It infers the installation year with the first year for which the image was predicted to contain PV. This scheme cannot be achieved by directly applying a single-branch CNN, as some historical aerial and satellite images have such low resolution (LR) that the visual features in a single image do not provide sufficient information for classification. An intuitive way to overcome this difficulty is to use the most recent image in a sequence—which contains PV and usually has high resolution (HR)—as a “reference” to provide extra visual clues for recognizing PV systems in a LR image." tab1Image={"assets/img/services/deepsolar++_model.png"} 
                        tab1Text2 = "Such a comparison-based strategy is inspired by a human’s ability of comparing a blurred image with a clear image at the same location to determine whether the same object in the latter also appears in the former. The comparison is implemented using a two-branch pseudo-Siamese CNN. The model architecture is shown as below:"
                        tab1Text3 = "We evaluate the overall prediction accuracy of the installation year on a test set containing 1,164 image sequences randomly sampled across 23 counties and our model can achieve a correct rate (ratio of sequences with the predicted installation year equal to the actual installation year labeled by visual inspection) of 85.9±1.0%."
                        tab1Image2 = "assets/img/services/model_arch.png"
                        tab2Name="DeepSolar++ Database" tab2Text={"We deployed the model to construct a spatiotemporal solar installation dataset across the U.S. In the DeepSolar++ paper, we grouped all U.S. counties according to their average number of residential PV installations per 1,000 households into 20 quantiles. Equal numbers of counties were randomly sampled from each quantile for representativeness. They cover 420 counties across 46 states in the US in total, representing one quarter of US households. \n We have now expanded the data coverage to all counties in the contiguous US. The variation of residential solar adoption rates (number of residential PV installations per 1,000 households) at the census block group level is shown as below. The aggregate-level data will be made publicly available soon." } tab2Image = "assets/img/services/solar_residential_all_50.gif"
                        tab3Name={"Useful Links"} tab3Text="serveralURLs" tab3Image={"assets/img/slider/02/slider-1.gif"}
                        tab4Name = {"News Coverage"}
                        tab4Text = {"news coverage++"}
                        tab5Name={"Cite the Paper"} tab5Text="Wang, Z., Arlt, M. L., Zanocco, C., Majumdar, A., & Rajagopal, R. (2022). DeepSolar++: Understanding residential solar adoption trajectories with computer vision and technology diffusion models. Joule, 6(11). DOI: https://doi.org/10.1016/j.joule.2022.09.011" tab5Image={"assets/img/expart/deepsolar++_background.jpeg"}/>
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
                     </div> 
                     : 
                     <div>
                        <HomeAbout href = "https://www.cell.com/joule/fulltext/S2542-4351(18)30570-1" linkName={"Link to paper"} image = "http://web.stanford.edu/group/deepsolar/assets2/img/choropleth_small.jpg" text = "We developed DeepSolar, a deep learning framework analyzing satellite imagery to identify the GPS locations and sizes of solar photovoltaic panels. Leveraging its high accuracy and scalability, we constructed a comprehensive high-fidelity solar deployment database for the contiguous US. We demonstrated its value by discovering that residential solar deployment density peaks at a population density of 1,000 capita/mile<sup>2</sup>, increases with annual household income asymptoting at ∼$150k, and has an inverse correlation with the Gini index representing income inequality. We uncovered a solar radiation threshold (4.5 kWh/m<sup>2</sup>/day) above which the solar deployment is “triggered”. Furthermore, we built an accurate machine learning-based predictive model to estimate the solar deployment density at the census tract level. We offer the DeepSolar database as a publicly available resource for researchers, utilities, solar developers, and policymakers to further uncover solar deployment patterns, build comprehensive economic and behavioral models, and ultimately support the adoption and management of solar electricity."/>
                        {/* <HomeTwoFaq/>
                        <HomeTwoAchievement/> */}
                           <HomeThreeSecondServices 
                           tab1Name = "DeepSolar Model"
                           tab1Text = "DeepSolar model incorporates both image classification and semantic segmentation in a single <a href = 'https://en.wikipedia.org/wiki/Convolutional_neural_network'><u>Convolutional Neural Network</u></a>. Classification is to localize the solar panels and segmentation is to estimate their sizes. The classification branch is developed based on <a href = 'https://arxiv.org/abs/1512.00567'><u>Google Inception V3</u></a>, which is pretrained on <a href = 'https://image-net.org/'><u>ImageNet</u></a> and then fine-tuned on our dataset containing 360K images. The output of the classifcation branch is a class indicating either 'positive' (containing solar panel) or 'negative' (not containing solar panel). The <a href = 'https://en.wikipedia.org/wiki/Precision_and_recall'><u>precision and recall</u></a> of classification are both around 90% for residential and non-residential areas."
                           tab1Image = "assets/img/services/dp1.png"
                           tab1Text2 = "Only if an image is classified as 'positive', the segmentation branch is executed. The segmentation does not need another foward pass. Instead, it leverages the intermediate results from the classification branch and generates the <a href = 'http://cnnlocalization.csail.mit.edu/Zhou_Learning_Deep_Features_CVPR_2016_paper.pdf'><u>Class Activation Maps (CAMs)</u><a> by aggregating feature maps learned through the convolutional layers. The segmentation results are then obtained by setting a threshold to the CAMs. The following figure shows the examples of original satellite images, the corresponding CAMs and segmentation results. Such segmentation method never used ground truth segmentation results for training, but only required ground truth class label ('positive' or 'negative') for minimizing the classification error instead. Therefore, it is 'semi-supervised', which is quite useful when the ground truth segmentation labeling is extremely expensive to get, as is in our case."
                           tab1Image2 = "http://web.stanford.edu/group/deepsolar/assets2/img/examples.jpg"
                           tab1Text3 = "To train the segmentation branch, we proposed a 'greed layerwise training; scheme to greedily extract features and improve the segmentation quality. In our case, we decompose the training into two steps. For each step, we greedily train a newly-added convolutional layer in the segmentation branch to minimize the classification error. See our paper and supplemental information for details of the DeepSolar model."
                           tab2Name = "DeepSolar Database"
                           tab2Text = "Leveraging the DeepSolar model, we have constructed a comprehensive solar installation database covering the 48 contiguous states in the U.S. The database includes location, size, and type (residential/non-residential) information for each recorded solar power system. The dataset will be continuously updated to generate a time-history of solar installations and increase coverage to include all of North America and non-contiguous US states. Such database can provide valuable resources for grid minotoring and operation, socioeconomic analysis for solar adoption, and to provide insight for energy policy making."
                           tab2Image = "http://web.stanford.edu/group/deepsolar/assets2/img/choropleth_small.jpg"
                           tab3Name = "Useful Links"
                           tab3Text = "serveralURLsForDeepSolar"
                           tab3Image={"assets/img/slider/02/slider-1.gif"}
                           tab4Name = "News Coverage"
                           tab4Text = "news coverage"
                           tab5Name = "Cite the Paper"
                           tab5Text = "Yu, J., Wang, Z., Majumdar, A., & Rajagopal, R. (2018). DeepSolar: A machine learning framework to efficiently construct a solar deployment database in the United States. Joule, 2(12), 2605-2617. DOI: https://doi.org/10.1016/j.joule.2018.11.021"
                           tab5Image={"http://web.stanford.edu/group/deepsolar/assets2/img/choropleth_small.jpg"}
                           />
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