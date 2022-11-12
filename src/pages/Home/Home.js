import React from 'react';
import HomeOneHeader from './HomeOneHeader/HomeOneHeader';
import HomeHeroSlider from './HomeHeroArea/HomeHeroSlider';
import HomeFeatures from './HomeFeatures/HomeFeatures';
import HomeAbout from './HomeAbout/HomeAbout';
import HomeCapabilities from './HomeCapabilities/HomeCapabilities';
import HomeServices from './HomeServices/HomeServices';
import HomeCounterArea from './HomeCounterArea/HomeCounterArea';
import HomeTeams from './HomeTeams/HomeTeams';
import HomePricing from './HomePricing/HomePricing';
import HomeBrands from './HomeBrands/HomeBrands';
import HomeContact from './HomeContact/HomeContact';
import Footer from '../../components/shared/Footer';
import CommonCtaArea from '../../components/CommonCtaArea/CommonCtaArea';
import PageHelmet from '../../components/shared/PageHelmet';


const Home = () => {
    return (
        <>
            <PageHelmet pageTitle="Home Page" />

            <HomeOneHeader/>
            <HomeHeroSlider/>
            <HomeFeatures/>
            <HomeAbout/>
            <HomeCapabilities/>
            <HomeServices/>
            <HomeCounterArea/>
            <HomeTeams/>
            <CommonCtaArea/>
            <HomePricing/>
            <HomeBrands/>
            <HomeContact/>
            <Footer/>
        </>
    );
};

export default Home;