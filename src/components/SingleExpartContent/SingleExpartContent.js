import React from 'react';
import { Link } from 'react-router-dom';

const SingleExpartContent = ({image}) => {
    return (
        <>
            <div className="expart__tab-content white-bg">
                <div className="expart__thumb" style={{ background: `url(assets/img/expart/expart-${image}.jpg)`, backgroundPosition: 'center', backgroundSize: 'cover' }} ></div>
                <div className="row">
                    <div className="col-xl-6 col-lg-6 offset-lg-6">
                        <div className="expart__content">
                            <h3>Deep Solar Project <br /> Description</h3>
                            <p>DeepSolar is a deep learning framework that analyzes satellite imagery to identify the GPS locations and sizes of solar photovoltaic (PV) panels. Leveraging its high accuracy and scalability, DeepSolar constructed a comprehensive high-fidelity solar deployment database for the contiguous U.S.

We demonstrated its value by discovering that residential solar deployment density peaks at a population density of 1000 capita/mile2, increases with annual household income asymptoting at ~$150K, and has an inverse correlation with the Gini index representing income inequality. We uncovered a solar radiation threshold (4.5 kWh/m2/day) above which the solar deployment is “triggered”. Furthermore, we built an accurate machine learning-based predictive model to estimate the solar deployment density at the census-tract level. We offer DeepSolar as a publicly-available database for researchers, utilities, solar developers and policymakers to further uncover solar deployment patterns, build comprehensive economic and behavioral models, and ultimately support the adoption and management of solar electricity.

The work has been accepted and published by Joule in December, 2018.</p>
                            <Link to="/about" className="z-btn">Learn More</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleExpartContent;