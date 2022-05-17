import React from 'react';
import './SteepItem.css'
import call from '../../../../images/call-center.png'
import worker from '../../../../images/worker.png'

const SteepItem = () => {
    return (
        <div className="steeps_main">
            <img className="call-center" src={call} alt="call" />
            <img className="worker" src={worker} alt="worker" />
            <div className="steep_item">
                <h2>1</h2>
                <p>Вы можете подать заявку по телефону, или заполнив форму в нашем мобильном приложении. Колл-центр
                    свяжет Вас со специалистом, для уточнения технических деталей работ, удобного для Вас времени и
                    желаемого способа оплаты (почасовой или по объёмам работ). </p>
            </div>
            <div className="steep_item">
                <h2 className="line">2</h2>
                <p>Дежурный инженер, собравший всю необходимую информацию о возникшей у Вас проблеме, оценивает её
                    сложность и передаёт одному из мастеров, чья квалификация подходит для выполнения этих работы.
                </p>
            </div>
            <div className="steep_item">
                <h2>3</h2>
                <p>В обговоренное в заявке время, специалист прибывает на место и выполняет задачу. После этого
                    подписывается акт выполненных работ, являющийся гарантийным документом. И лишь по итогам
                    принятия этого документа осуществляется оплата, по определённым ранее условиям.</p>
            </div>
        </div>
    );
}

export default SteepItem;
