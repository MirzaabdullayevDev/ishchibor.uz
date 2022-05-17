import React from 'react';
import './AboutItem.css'
import quality from '../../../../images/quality.png'
import surface1 from '../../../../images/surface1.png'
import hours from '../../../../images/24-hours.png'
import alarm from '../../../../images/alarm.png'

const AboutItem = () => {
    return (
        <div className="about_items">
            <div className="about_item">
                <div className="about_item_img">
                    <img src={quality} alt="png" />
                </div>
                <h4 className="about_item_title">Более 20 лет работы в этом сегменте сервиса</h4>
            </div>
            <div className="about_item">
                <div className="about_item_img">
                    <img src={surface1} alt="png" />
                </div>
                <h4 className="about_item_title">Качественные деталей и расходных материалов</h4>
            </div>
            <div className="about_item">
                <div className="about_item_img">
                    <img src={hours} alt="png" />
                </div>
                <h4 className="about_item_title">Круглосуточный выезд к клиенту в течение 1–1,5 часов</h4>
            </div>
            <div className="about_item">
                <div className="about_item_img">
                    <img src={alarm} alt="png" />
                </div>
                <h4 className="about_item_title">Выезд 30 минут при срочном ремонте</h4>
            </div>
        </div>
    );
}

export default AboutItem;
