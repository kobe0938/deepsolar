import React from 'react';
import { Link } from 'react-router-dom';

const SingleExpartContent = ({image, card}) => {
    return (
        <>
            <div className="expart__tab-content white-bg">
                <div className="expart__thumb" style={{ background: card.backgroundImage, backgroundPosition: 'center', backgroundSize: "100% 100%" }} ></div>
                <div className="row">
                    <div className="col-xl-6 col-lg-6 offset-lg-6">
                        <div className="expart__content">
                            <h3>{card.title} <br /> {card.subtitle}</h3>
                            <p>{card.description}</p>
                            <a href={card.href} className="z-btn">{card.button}</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleExpartContent;