import React, { useEffect, useState } from 'react'
import axios from 'axios';

import './masonry.css';
import Masonry from "react-masonry-css";
import ListingCard from '../../components/ListingCard/ListingCard';

function Listings() {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    axios.get('/api/v1/listings')
    .then(({ data }) => {
      console.log('data :>> ', data);
      setListings(data)
    })
  }, [])
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>All Listings</h1>
      <Masonry
        breakpointCols={5}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column">
        {listings.map(listing => <ListingCard key={listing.id} { ...listing } />)}
      </Masonry>
    </div>
  )
}

export default Listings;