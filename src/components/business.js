import React from 'react';
import './business.css';
import businessImage from '../assets/images/gabagool1.jpeg'

function Business ({ imageSrc, name, address, city, state, postcode, category, rating, reviewCount }) {
    return (
        <div className='business'>
            <div className='image-container'>
                <img src={imageSrc} alt={name} />
            </div>
            <h2>{name}</h2>
            <div className='business-information'>
                <div className='business-address'>
                    <p>{address}</p>
                    <p>{city}</p>
                    <p>{state}</p>
                    <p>{postcode}</p>
                </div>
                <div className='business-details'>
                    <h3>{category}</h3>
                    <h3 className='rating'>{rating}</h3>
                    <p>{reviewCount} reviews</p>
                </div>
            </div>
        </div>
    );
};

export default Business;