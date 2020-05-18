import React from 'react'
import { useParams } from 'react-router-dom';

const Product = () => {
  const params =  useParams();
  // console.log(params)
  return (
    <h3>Product #{params.id}</h3>
  )
}

export default Product
