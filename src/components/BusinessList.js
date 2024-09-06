import React from 'react';
import Business from './Business';
import './BusinessList.css'; 

// Array of business objects
const businesses = [
  {
    id: 1,
    imageSrc: 'https://via.placeholder.com/150',
    name: 'Pasta Palace',
    address: '123 Main Street',
    city: 'New York',
    state: 'NY',
    zipcode: '10001',
    category: 'Italian',
    rating: 4.5,
    reviewCount: 90
  },
  {
    id: 2,
    imageSrc: 'https://via.placeholder.com/150',
    name: 'Burger Barn',
    address: '456 Side Avenue',
    city: 'Brooklyn',
    state: 'NY',
    zipcode: '11201',
    category: 'American',
    rating: 4.7,
    reviewCount: 120
  },
  {
    id: 3,
    imageSrc: 'https://via.placeholder.com/150',
    name: 'Gabagool Gallery',
    address: '123 Main Street',
    city: 'New York',
    state: 'NY',
    postcode: '10001',
    category: 'Italian',
    rating: 4.5,
    reviewCount: 90
  },
  {
    id: 4,
    imageSrc: 'https://via.placeholder.com/150',
    name: 'Gabagool Gallery',
    address: '123 Main Street',
    city: 'New York',
    state: 'NY',
    postcode: '10001',
    category: 'Italian',
    rating: 4.5,
    reviewCount: 90
  },
  {
    id: 5,
    imageSrc: 'https://via.placeholder.com/150',
    name: 'Gabagool Gallery',
    address: '123 Main Street',
    city: 'New York',
    state: 'NY',
    postcode: '10001',
    category: 'Italian',
    rating: 4.5,
    reviewCount: 90
  },
  {
    id: 6,
    imageSrc: 'https://via.placeholder.com/150',
    name: 'Gabagool Gallery',
    address: '123 Main Street',
    city: 'New York',
    state: 'NY',
    postcode: '10001',
    category: 'Italian',
    rating: 4.5,
    reviewCount: 90
  },
  {
    id: 7,
    imageSrc: 'https://via.placeholder.com/150',
    name: 'Gabagool Gallery',
    address: '123 Main Street',
    city: 'New York',
    state: 'NY',
    postcode: '10001',
    category: 'Italian',
    rating: 4.5,
    reviewCount: 90
  },
  {
    id: 8,
    imageSrc: 'https://via.placeholder.com/150',
    name: 'Gabagool Gallery',
    address: '123 Main Street',
    city: 'New York',
    state: 'NY',
    postcode: '10001',
    category: 'Italian',
    rating: 4.5,
    reviewCount: 90
  }
  // Add more business objects here
];

// Business list function
function BusinessList() {
  return (
    <div className="business-list">
      {businesses.map(business => (
        <Business
          key={business.id}
          imageSrc={business.imageSrc}
          name={business.name}
          address={business.address}
          city={business.city}
          state={business.state}
          zipcode={business.zipcode}
          category={business.category}
          rating={business.rating}
          reviewCount={business.reviewCount}
        />
      ))}
    </div>
  );
};

export default BusinessList;
