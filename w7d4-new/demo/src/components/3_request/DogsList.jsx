import React, { useEffect, useState } from 'react'
import ImageGridList from '../0_helpers/ImageGridList';
import useRequest from '../../hooks/useRequest';

function Dogs() {
  const { error, loading, data: dogs } = useRequest('https://api.thedogapi.com/v1/images/search?limit=80&mime_types=&order=Random&size=small&page=1&sub_id=demo-507df3')

  if (error) {
    return <h4>{error}</h4>
  }
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Who let the Dawgs out</h1>
      <p>No, not a question!</p>
      {loading ? (
        <h4>Loading dogs ... ...</h4>
      ) : (
        <ImageGridList images={dogs} />
      )}
    </div>
  )
}

export default Dogs;