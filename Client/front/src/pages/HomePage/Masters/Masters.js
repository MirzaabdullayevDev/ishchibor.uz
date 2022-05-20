import React from 'react';
import MasterItem from './mastersItem/masterItem';
import "./Masters.css"

const Masters = () => {
    const masterInfo = [
        {
            name: "Rafael Xamitovich Vaxitov",
            location: "Olmaliq",
            info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex            voluptates, fugiat minus explicabo, recusandae quis dolorum sunt            expedita saepe iure provident eum sequi dolorem possimus corrupti laudantium. Consequuntur natus, deserunt illo,architecto?",
            image: "https://avatars.mds.yandex.net/get-ydo/3937212/2a0000017893814d9f4434550ae1be4ad5e3/face_mini"
        },
        {
            name: "Erikson Michael",
            location: "Oxongaron",
            info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex            voluptates, fugiat minus explicabo, recusandae quis dolorum sunt            expedita saepe iure provident eum sequi dolorem possimus corrupti laudantium. Consequuntur natus, deserunt illo,architecto?",
            image: "https://i.pinimg.com/474x/74/05/5f/74055f83bfbdc20fdc1f9d1fc116fd26.jpg"
        },

    ]
    return (
        <section className="top_masters">
            <div className="container">
                <div className="masters_title">
                    <h2 className="section_title">Top masters</h2>
                </div>
                <div className="masters">
                    {
                        masterInfo.map((item, index) => (
                            <MasterItem masterInfo={item} key={index} />
                        ))
                    }
                </div>
            </div>
        </section>
    );
}

export default Masters;
