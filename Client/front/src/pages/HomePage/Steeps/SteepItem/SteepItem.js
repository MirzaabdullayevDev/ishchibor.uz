import React from 'react';
import './SteepItem.css'
import call from '../../../../images/call-center.png'
import worker from '../../../../images/worker.png'

const SteepItem = () => {
    const introduction = [
        {
            number: 1,
            info: "Вы можете подать заявку по телефону, или заполнив форму в нашем мобильном приложении. Колл-центр свяжет Вас со специалистом, для уточнения технических деталей работ, удобного для Вас времени и желаемого способа оплаты (почасовой или по объёмам работ)",
        },
        {
            number: 2,
            info: "Дежурный инженер, собравший всю необходимую информацию о возникшей у Вас проблеме, оценивает её сложность и передаёт одному из мастеров, чья квалификация подходит для выполнения этих работы.",
        },
        {
            number: 3,
            info: "В обговоренное в заявке время, специалист прибывает на место и выполняет задачу. После этого подписывается акт выполненных работ, являющийся гарантийным документом. И лишь по итогам принятия этого документа осуществляется оплата, по определённым ранее условиям.",
        },
    ]
    return (
        <div className="steeps_main">
            <img className="call-center" src={call} alt="call" />
            <img className="worker" src={worker} alt="worker" />
            {
                introduction.map((item, index) => (
                    <div className="steep_item" key={index}>
                        <h2>{item.number}</h2>
                        <p>{item.info} </p>
                    </div>
                ))
            }
        </div>
    );
}

export default SteepItem;
