import React from 'react';
import './business.css';
import businessImage from '../assets/images/gabagool1.jpeg'

// Hardcoded Test Business (filler)

const business = {
    imageSrc: businessImage,
    name: 'Gabagool Gallery',
    address: '123 Main Street',
    city: 'New York',
    state: 'NY',
    postcode: '10001',
    category: 'Italian',
    rating: 4.5,
    reviewCount: 90
};

// Business Component

const Business = () => {
    return (
        <div className='business'>
            <div className='image-container'>
                <img src={business.imageSrc} alt={business.name} />
            </div>
            <h2>{business.name}</h2>
            <div className='business-information'>
                <div className='business-address'>
                    <p>{business.address}</p>
                    <p>{business.city}</p>
                    <p>{business.state}</p>
                    <p>{business.postcode}</p>
                </div>
                <div className='business-details'>
                    <h3>{business.category}</h3>
                    <h3 className='rating'>{business.rating}</h3>
                    <p>{business.reviewCount} reviews</p>
                </div>
            </div>
        </div>
    );
};

export default Business;