import React from 'react';
import MasterItem from './mastersItem/masterItem';
import "./Masters.css"

const Masters = () => {
    return (
        <section className="top_masters">
            <div className="container">
                <div className="masters_title">
                    <h2 className="section_title">Top masters</h2>
                </div>
                <div className="masters">
                    <MasterItem />
                </div>
            </div>
        </section>
    );
}

export default Masters;
