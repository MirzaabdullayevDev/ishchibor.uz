import React from 'react';
import "./masterItem.css"

const MasterItem = () => {
    return (
        <div className="master_item">
            <div className="master_info">
                <div className="master_info_img">
                    <img src="https://avatars.mds.yandex.net/get-ydo/3937212/2a0000017893814d9f4434550ae1be4ad5e3/face_mini"
                        alt="img" />
                </div>
                <div className="master_info_rate">
                    <i className="fa-solid fa-star"></i>
                    <span>0.0</span>
                </div>
                <div className="master_info_confirm">
                    <i className="fa-solid fa-circle-check"></i>
                    <span>Tasdiqlangan</span>
                </div>
            </div>
            <div className="master_about">
                <div className="master_about_title">
                    <h2>Rafael Xamitovich Vaxitov</h2>
                    <button>
                        <i className="fa-solid fa-ellipsis-vertical"></i>
                    </button>
                </div>
                <div className="state">
                    <p className="location">Olmaliq</p>
                </div>
                <p className="masterinfo">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
                    voluptates, fugiat minus explicabo, recusandae quis dolorum sunt
                    expedita saepe iure provident eum sequi dolorem possimus
                    corrupti laudantium. Consequuntur natus, deserunt illo,
                    architecto?
                </p>
                <div className="works">
                    <div className="work_item">
                        <img src="https://avatars.mds.yandex.net/get-ydo/1817195/2a00000175587255dab1d9be1556f5f75776/face_mini"
                            alt="img" />
                    </div>
                    <div className="work_item">
                        <img src="https://avatars.mds.yandex.net/get-ydo/1817195/2a00000175587255dab1d9be1556f5f75776/face_mini"
                            alt="img" />
                    </div>
                    <div className="work_item">
                        <img src="https://avatars.mds.yandex.net/get-ydo/1817195/2a00000175587255dab1d9be1556f5f75776/face_mini"
                            alt="img" />
                    </div>
                    <div className="work_item">
                        <img src="https://avatars.mds.yandex.net/get-ydo/1817195/2a00000175587255dab1d9be1556f5f75776/face_mini"
                            alt="img" />
                    </div>
                </div>
                <div className="prices">
                    <ul className="price_list">
                        <li className="price_item">
                            <p>Установка и подключение</p>
                            <span>1000 ₽</span>
                        </li>
                        <li className="price_item">
                            <p>Ремонт стиральной машины</p>
                            <span>1000 ₽</span>
                        </li>
                    </ul>
                </div>
                <div className="contact">
                    <div className="call btn">
                        <i className="fa-solid fa-phone"></i>
                        <span>Телефон</span>
                    </div>
                    <div className="chat btn">
                        <i className="fa-solid fa-comment-dots"></i>
                        <span>Чат</span>
                    </div>
                    <div className="order btn">
                        <span>Предложить заказ</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MasterItem;
