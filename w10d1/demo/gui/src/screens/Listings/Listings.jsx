import './masonry.css';
import Masonry from 'react-masonry-css';
// import ListingCard from '../../components/ListingCard/ListingCard';
// import axios from 'axios';
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import MUICard from '../../components/MUICard/MUICard'

const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1
};

function Listings() {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    // 1. Fetch data from backend
    axios.get('/api/v1/listings')
    .then(({ data }) => {
      // a. parse from its JSON string to JS Object
      // console.log('resp :>> ', resp.data);
      console.log('resp :>> ', data);
      setListings(data);
    })
  }, [])

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>All Listings</h1>
      <Masonry breakpointCols={breakpointColumnsObj}>
        {listings.map(listing => (
          <MUICard key={listing.id} { ...listing } />
        ))}
      </Masonry>
    </div>
  );
}

export default Listings;