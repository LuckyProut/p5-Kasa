import React from 'react';
import '../../style/namelocation.scss'

const NameLocation = ({ title, location }) => {
    return (
        <div className="announcement__container">
            <h1 className='announcement__container__title'>{title}</h1>
            <h2 className='announcement__container__location'>{location}</h2>
        </div>
    );
};

export default NameLocation;