import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './masonry.css';
import Masonry from 'react-masonry-css';
import ListingCard from '../../components/ListingCard/ListingCard';


function Listings() {
  const [listings, setListings] =  useState([])
  useEffect(() => {
    axios.get('/api/v1/listings')
    .then(({ data }) => {
      console.log('response :>> ', data);
      setListings([ ...listings, ...data])
    })
  }, []);

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>All Listings</h1>
      <Masonry
      
      >
        {listings.map((listing) => (
          <ListingCard key={listing.id} {...listing} />
        ))}
      </Masonry>
    </div>
  );
}

export default Listings;