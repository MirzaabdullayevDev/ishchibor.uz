import React from 'react';
import './About.css'
import AboutItem from './AboutItem/AboutItem';

const About = () => {
    return (
        <section className="about">
            <div className="container">
                <h2 className="section_title">О нас</h2>
            </div>
            <div className="container">
                <div className="about_main">
                    <div className="about_info">
                        <p>Служба «Master Profman» создана для предоставления на дому бытовых и ремонтных услуг клиентам из
                            Санкт-Петербурга и Ленинградской области. Квалифицированные мастера недорого и быстро выполнят
                            сантехнические и электромонтажные работы, произведут установку инженерного оборудования,
                            электротехники.
                            <br />
                            <br />
                            Клиентам предоставляются бесплатные консультации и оказывается помощь в выборе оптимального
                            решения
                            с учетом условий эксплуатации и потребностей. На все выполненные операции предоставляется
                            гарантия.
                        </p>
                    </div>
                    <AboutItem />
                </div>
            </div>
        </section>
    );
}

export default About;
