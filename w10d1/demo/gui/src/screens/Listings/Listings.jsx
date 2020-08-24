import './masonry.css';
import Masonry from 'react-masonry-css';
import ShoeCard from '../../components/ListingCard/ListingCard'
// import ListingCard from '../../components/ListingCard/ListingCard';
import React, { useEffect, useState } from 'react'
import axios from 'axios';

const breakpointColumnsObj = {
  default: 5,
  1100: 3,
  700: 2,
  500: 1
};

function Listings() {
  const [shoes, setShoes] = useState([])
  useEffect(() => {
    axios.get('/api/v1/shoes')
    .then(({ data }) => {
      console.log('DATA back', data)
      setShoes(data)
    })
  }, [])

  console.log("SHOES", shoes)
  if (shoes.length == 0) return <h2>Loading shoes, hang tight...</h2>
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>All Shoes</h1>
      <Masonry breakpointCols={breakpointColumnsObj}>
        {shoes.map(shoe => {
          return (<ShoeCard key={shoe.id} {...shoe}/>)
        })}
      </Masonry>
    </div>
  );
}

export default Listings;