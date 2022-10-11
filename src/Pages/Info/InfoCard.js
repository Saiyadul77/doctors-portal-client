import React from 'react';

const InfoCard = ({img, cardTitle, bgClass, description}) => {
    return (
        <div className={`card lg:card-side shadow-xl pt-5 lg:pt-0   ${bgClass}`}>
            <figure className='pl-5 '>
                <img src={img} alt="Album" />
            </figure>
            <div className="card-body text-white">
                <h2 className="card-title">{cardTitle}</h2>
                <p>{description}</p>

            </div>
        </div>);
};

export default InfoCard;