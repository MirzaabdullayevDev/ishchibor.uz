import React from 'react';
import SteepItem from './SteepItem/SteepItem';
import './Steeps.css'

const Steeps = () => {
    return (
        <section className="steeps">
            <div className="container">
                <div className="steeps_title">
                    <h2 className="section_title">Заказать вызов мастера на дом</h2>
                </div>
            </div>
            <div className="container">
                <SteepItem />
            </div>
        </section>
    );
}

export default Steeps;
