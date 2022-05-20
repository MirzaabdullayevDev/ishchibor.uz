import React from 'react';
import './AboutItem.css'
import quality from '../../../../images/quality.png'
import surface1 from '../../../../images/surface1.png'
import hours from '../../../../images/24-hours.png'
import alarm from '../../../../images/alarm.png'

const AboutItem = () => {
    const aboutItem = [
        {
            image: quality,
            aboutInfo: "Более 20 лет работы в этом сегменте сервиса"
        },
        {
            image: surface1,
            aboutInfo: "Качественные деталей и расходных материалов"
        },
        {
            image: hours,
            aboutInfo: "Круглосуточный выезд к клиенту в течение 1–1,5 часов"
        },
        {
            image: alarm,
            aboutInfo: "Выезд 30 минут при срочном ремонте"
        },
    ]
    return (
        <div className="about_items">
            {
                aboutItem.map((item, index) => (
                    <div className="about_item" key={index}>
                        <div className="about_item_img">
                            <img src={item.image} alt="png" />
                        </div>
                        <h4 className="about_item_title">{item.aboutInfo}</h4>
                    </div>
                ))
            }
        </div>
    );
}

export default AboutItem;
