import React from 'react';

// Business Component

const Business = () => {
    return (
        <div className='business'>
            <div className='image-container'>
                <img src='#' alt='Business' />
            </div>
            <h2>Business Name</h2>
            <div className='business-information'>
                <div className='business-address'>
                    <p>120 Gabagool Cnr</p>
                    <p>City</p>
                    <p>state</p>
                    <p>Post Code</p>
                </div>
                <div className='business-details'>
                    <h3>Category</h3>
                    <h3 className='rating'>4.5 Gabagools</h3>
                    <p>reviews</p>
                </div>
            </div>
        </div>
    );
};

export default Business;