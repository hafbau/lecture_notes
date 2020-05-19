import React from 'react'
import { useParams } from 'react-router-dom'

export default function Product() {
  const params = useParams()
  console.log('params :>> ', params);
  return (
    <h4>
      The Product #{params.id} is here!!
    </h4>
  )
}
