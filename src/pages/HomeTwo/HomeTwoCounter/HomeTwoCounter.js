import React from 'react';
import SingleCount from '../../../components/SingleCount/SingleCount';

const HomeTwoCounter = () => {
    return (
        <>
            <section className="counter__area counter__area-2 pt-85 pb-85">
                <div className="container">
                    <div className="row">
                        <SingleCount counter={1749} title="Happy Clients" color="blue-2-color" />
                        <SingleCount counter={796} title="Project Completed" color="pink-color" />
                        <SingleCount counter={573} title="Support Given" color="green-4-color" />
                        <SingleCount counter={2739} title="Offices Worldwide" color="orange-color" />
                    </div>
                </div>
            </section>
        </>
    );
};

export default HomeTwoCounter;